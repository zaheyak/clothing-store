import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css"; // ודא שהשם של הקובץ הוא 'module' ולא 'moudle'

function Home() {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <section className={styles.homeSection}>
      <div className={styles.mainImageContainer}>
        <div>
          <img
            className={styles.mainImage}
            src="https://twentysix26.com/cdn/shop/files/2Q6A0115_be8ae539-f5c0-4eec-aac0-8eea774d47ce.jpg?v=1719497793&width=2400"
            alt="Fashion clothes on hangers"
          />
        </div>
      </div>

      <div className={styles.shopCategory}>
        <h2 className={styles.shopTitle}>SHOP BY CATEGORY</h2>
        <div className={styles.categories}>
          <div
            className={styles.category}
            onClick={() => handleCategoryClick("/BodyShape")}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1_ZHuHkPXOHIPg3AzObkEogakAd685woa32GHAZSCqPoxKvXELr3WUBb8nSmzc00H9o&usqp=CAU"
              alt="Body Shape"
            />
            <p className={styles.categoryName}>Body Shape</p>
          </div>
          <div
            className={styles.category}
            onClick={() => handleCategoryClick("/bottoms")}
          >
            <img
              src="https://i.pinimg.com/736x/5c/99/80/5c9980ec5c2312e8433033f3ee08b654.jpg"
              alt="Bottoms"
            />
            <p className={styles.categoryName}>Bottoms</p>
          </div>
          <div
            className={styles.category}
            onClick={() => handleCategoryClick("/tops")}
          >
            <img
              src="https://i.pinimg.com/564x/ad/02/b9/ad02b9d5c57e4cf25e3f5f232f2fc0ec.jpg"
              alt="Tops"
            />
            <p className={styles.categoryName}>Tops</p>
          </div>
          <div
            className={styles.category}
            onClick={() => handleCategoryClick("/dresses")}
          >
            <img
              src="https://i.pinimg.com/564x/19/01/4c/19014cc1fe48a0ecafd3bc6c7be5920f.jpg"
              alt="Dresses"
            />
            <p className={styles.categoryName}>Dresses</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
