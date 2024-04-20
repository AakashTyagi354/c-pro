import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const hospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rooms: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
    default: [],
  },
  patients: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
    default: [],
  },
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
