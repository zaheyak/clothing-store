const doQuery = require("../query");
async function getAllProducts() {
  const connection = await connect();
  try {
    const [rows] = await doQuery("SELECT p.ProductID, p.Description, p.Price, GROUP_CONCAT(pd.color) AS colors, GROUP_CONCAT(pd.Size) AS sizes, GROUP_CONCAT(pd.imgName) AS imgNames
  FROM products p
  INNER JOIN (
      SELECT MIN(pd.ProductDetailID) AS ProductDetailID, pd.ProductID
      FROM productDetails pd
      GROUP BY pd.ProductID
  ) AS pdmin ON p.ProductID = pdmin.ProductID
  INNER JOIN productDetails pd ON pd.ProductDetailID = pdmin.ProductDetailID
  GROUP BY p.ProductID");
    return rows;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  } finally {
    connection.end(); // לסגור את החיבור לאחר השימוש
  }
}
module.exports = getAllProducts;