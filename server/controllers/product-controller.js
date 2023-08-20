const Product = require("../models/productSchema");

const getProducts = async (req, res) => {
  try {
    const result = await Product.find({});
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getProductsByCategory = async (req, res) => {
  const cName = req.params.categoryName;
  try {
    if (cName === "top offers" || cName == "recommended") {
      const result = await Product.find({});
      res.json(result);
    } else {
      const result = await Product.find({ category: cName });
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const result = await Product.findById(productId);
    let freq = result.freq + 1;
    await Product.updateOne(
        { _id: productId},
        { $set: { freq: freq } }
    )
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getProductsBySubCategory = async(req, res) => {
  const scName = req.params.subCategoryName;
  try {
    const result = await Product.find({ subCategory: scName });
    res.json(result);
  } catch(error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getProducts,
  getProductsByCategory,
  getProductById,
  getProductsBySubCategory
};
