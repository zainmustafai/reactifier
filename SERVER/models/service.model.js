import mongoose from "mongoose";
const serviceSchema = mongoose.Schema({
  title: String,
  description: String,
  serviceCategory: String,

  price: Number,
  createdAt: {},
  updatedAt: {},
  servicePicture: String,
});

const Service = mongoose.model("Service", serviceSchema);
export default Service;
