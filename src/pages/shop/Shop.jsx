import React, { useState, useEffect } from "react";
import axios from "axios";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products"); // נתיב ה-URL לקריאת המוצרים מהשרת
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            {/* כאן תוכל להציג עוד פרטים על המוצר, כגון צבעים ומידות */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
