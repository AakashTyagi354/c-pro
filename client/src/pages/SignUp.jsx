import React, { useState } from "react";
import AuthWrapper from "../components/AuthWrapper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/reducers/user.slice";

const SignUp = () => {
  const [hospitalName, setHospitalName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setHospitalName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: hospitalName,
          email: email,
          location: location,
          password: password,
          confirmPassword: confirmPassword,
        }),
      });
      if (!response.ok) {
        setError("Something went wrong");
        return;
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("currentUser", JSON.stringify(data.hospital));
      dispatch(setUser(data.hospital));
      setHospitalName("");
      setEmail("");
      setLocation("");
      setPassword("");
      setConfirmPassword("");
      navigate("/");
    } catch (error) {
      setError("Cannot sign up");
      setHospitalName("");
      setEmail("");
      setLocation("");
      setPassword("");
      setConfirmPassword("");
      console.log(error.message);
      return;
    }
  };

  return (
    <AuthWrapper>
      <div className="flex items-center flex-col gap-6">
        <h1 className="font-semibold text-3xl text-black">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-4"
        >
          <div className="relative">
            <input
              type="text"
              id="hospitalName"
              value={hospitalName}
              onChange={handleNameChange}
              className="w-full md:w-96 px-4 py-3 rounded-md outline-none shadow-inner"
              placeholder="Hospital Name"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full md:w-96 px-4 py-3 rounded-md outline-none shadow-inner"
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="w-full md:w-96 px-4 py-3 rounded-md outline-none shadow-inner"
              placeholder="Location"
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full md:w-96 px-4 py-3 rounded-md outline-none shadow-inner"
              placeholder="Password"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              id="confirmation"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full md:w-96 px-4 py-3 rounded-md outline-none shadow-inner"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-[#4B8AFF] hover:opacity-95"
          >
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link className="hover:underline" to="/signin">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
