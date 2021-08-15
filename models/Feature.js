import mongoose from "mongoose";
const { Schema } = mongoose;

const featureSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  itemId: {
    type: mongoose.ObjectId,
    ref: "Item",
  },
});

module.exports = mongoose.model("Feature", featureSchema);
