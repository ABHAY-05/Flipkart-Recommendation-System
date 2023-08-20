const mongoose = require("mongoose");

const viewSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  productId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  freq: {
    type: Number,
    default: 1,
  }
});

const Viewlist = new mongoose.model("viewlist", viewSchema, "viewlist");

module.exports = Viewlist;