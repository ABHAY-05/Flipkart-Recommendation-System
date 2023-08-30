const express = require("express");
require('dotenv').config({ path: '../.env'});

const {
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsBySubCategory
} = require("../controllers/product-controller");

const {
  addItem,
  removeItem,
  removeAllItem,
  getCartItems,
} = require("../controllers/cart-controller");

const {
  addItem: addItemWishlist,
  removeItem: removeItemWishlist,
  getWishlistItems,
} = require("../controllers/wishlist-controller");

const {
  signup,
  login,
  logout,
  loginWithMobileNumber,
  isExistPhone,
  authentication,
  updateUserInfo,
  updateEmail,
} = require("../controllers/user-controller");

const {
  addNewAddress,
  getAddress,
  deleteAddress,
} = require("../controllers/address-controller");

const {
  completeOrder,
  getOrderDetails,
} = require("../controllers/order-controller");

const {
  addItemViewlist,
  getViewlistItems,
  removeViewlistItem
} = require("../controllers/view-controller");

const router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
  next();
});

// User Account related routes
router.post("/accounts/signup", signup);
router.post("/accounts/login", login);
router.post("/accounts/login-with-phone", loginWithMobileNumber);
router.post("/accounts/check-phone", isExistPhone);
router.post("/accounts/authentication", authentication);
router.post("/accounts/logout", logout);
router.patch("/accounts/update-user-info", updateUserInfo);
router.patch("/accounts/update-email", updateEmail);

// Product related routes
router.get("/products/get-products", getProducts);
router.get("/products/get-products/:categoryName", getProductsByCategory);
router.get("/products/get-product/:id", getProductById);
router.get("/products/get-products-sub/:subCategoryName", getProductsBySubCategory)

// Cart related routes
router.post("/cart/add-item", addItem);
router.delete("/cart/remove-item", removeItem);
router.delete("/cart/clear-cart", removeAllItem);
router.get("/cart/get-items/:id", getCartItems);

// Wishlist related routes
router.post("/wishlist/add-item", addItemWishlist);
router.delete("/wishlist/remove-item", removeItemWishlist);
router.get("/wishlist/get-items/:id", getWishlistItems);

// Address related routes
router.post("/address/add-address", addNewAddress);
router.get("/address/get-addresses/:id", getAddress);
router.delete("/address/delete-address", deleteAddress);

// orders related routes
router.post("/orders/complete-order", completeOrder);
router.post("/orders/get-order-details", getOrderDetails);

// Viewlist related routes
router.post("/viewlist/add-item", addItemViewlist);
router.get("/viewlist/get-items/:id", getViewlistItems);
router.delete("/viewlist/remove-item", removeViewlistItem);

module.exports = router;
