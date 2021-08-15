const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  itemId: [
    {
      type: mongoose.ObjectId,
      ref: "item",
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
