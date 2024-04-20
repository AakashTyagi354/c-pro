import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
  },
  totalBeds: {
    type: Number,
    required: true,
  },
  occupiedBeds: {
    type: Number,
    required: true,
  },
});

export default roomSchema;
