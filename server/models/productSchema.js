const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: {
    shortTitle: String,
    longTitle: String,
  },
  price: {
    mrp: Number,
    cost: Number,
    discount: String,
  },
  qty:Number,
  category:String,
  discount: String,
  tagline: String,
  url: String,
  detailUrl: String,
  freq: {
    type: Number,
    default: 1
  },
  rating: {
    type: Number,
    default: 4.2
  },
  subCategory: {
    type: String,
    required: true
  }
});

const Product = new mongoose.model("product", productSchema);

module.exports = Product;
