const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../database/products"); // דוגמה לשימוש בפונקציות מקובץ המוצרים בתיקיית database

// מציג את כל המוצרים
router.get("/products", async (req, res) => {
  try {
    const products = await getAllProducts(); // קורא לפונקציה שמביאה את כל המוצרים מהבסיס נתונים
    res.json(products);
  } catch (err) {
    console.error("Failed to fetch products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
