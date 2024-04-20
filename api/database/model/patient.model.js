import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  caseType: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: String,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  bedNumber: {
    type: Number,
    required: true,
  },
  problems: [String],
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
