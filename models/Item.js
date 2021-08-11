import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  description: {
    type: String,
    required: true,
  },
  imageId: [
    {
      type: mongoose.ObjectId,
      ref: "Image",
    },
  ],
  featureId: [
    {
      type: mongoose.ObjectId,
      ref: "Feature",
    },
  ],
  activityId: [
    {
      type: mongoose.ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
