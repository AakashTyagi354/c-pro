import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Hospital from "../database/model/hospital.model.js";

export const checkUser = async (req, res) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
        });
      } else {
        try {
          const hospital = await Hospital.findById(decoded.userId);
          if (!hospital) {
            return res.status(404).json({
              message: "Hospital not found",
            });
          }
          res.status(200).json({
            hospital,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
            message: "Internal Server Error",
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hospital = await Hospital.findOne({ email });
    if (hospital) {
      if (!hospital.password) {
        return res.status(401).json({ message: "Invalid Credentials" });
      }

      const isPasswordValid = await bcrypt.compare(password, hospital.password);
      if (isPasswordValid) {
        const token = generateToken(hospital);
        res.status(200).json({
          hospital,
          token,
        });
      } else {
        res.status(401).json({
          message: "Invalid Credentials",
        });
      }
    } else {
      res.status(401).json({
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const signup = async (req, res) => {
  const { name, email, location, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    const existingHospital = await Hospital.findOne({ email });
    if (existingHospital) {
      return res.status(400).json({
        message: "Email is already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newHospital = new Hospital({
      name,
      email,
      location,
      password: hashedPassword,
    });
    await newHospital.save();

    const token = generateToken(newHospital);

    res.status(201).json({
      hospital: newHospital,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const generateToken = (hospital) => {
  const payload = {
    userId: hospital.id,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
