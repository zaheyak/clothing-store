import React from "react";
import styles from "./bodyShapes.module.css";

function BodyShape() {
  return (
    <div className={styles.bodyShapeContainer}>
      <div className={styles.bodyShape}>
        <h1>Rectangle Body Shape</h1>
        <img 
          src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee75925921007691cf74eda_Rectangle%20Body%20Shape%201-p-500.webp"
          alt="Rectangle Body"
          className={styles.bodyShapeImage}
        />
        <p>
          Bust/Shoulders and hips will be almost the same - within 5% of each
          other - and your waist will be less than 25% smaller than your bust.
        </p>
        <button className={styles.seeMoreButton}>see what fits you</button>
      </div>

      <div className={styles.bodyShape}>
        <h1>Pear Body Shape</h1>
        <img
          src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee943e91532f132679ac1ce_Pear%20Body%20Shape%201-p-500.webp"
          alt="Pear Body"
          className={styles.bodyShapeImage}
        />
        <p>
          Your hips will be the smallest of the three measurements. Your
          bust/shoulder measurements are more than 5% bigger than your hip
          measurement.
        </p>
        <button className={styles.seeMoreButton}>see what fits you</button>
      </div>

      <div className={styles.bodyShape}>
        <h1>Inverted Triangle Body Shape</h1>
        <img
          src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee94404d6df61a04df2b5e2_Inverted%20Triangle%20Body%20Shape%201-p-500.webp"
          alt="Inverted Triangle Body"
          className={styles.bodyShapeImage}
        />
        <p>
          Your hips will be the smallest of the three measurements. Your
          bust/shoulder measurements are more than 5% bigger than your hip
          measurement.
        </p>
        <button className={styles.seeMoreButton}>see what fits you</button>
      </div>

      <div className={styles.bodyShape}>
        <h1>Hourglass Body Shape</h1>
        <img
          src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee94418f037264b47738441_Hourglass%20Body%20Shape%201-p-500.webp"
          alt="Hourglass Body"
          className={styles.bodyShapeImage}
        />
        <p>
          Your bust and hips will be almost the same (within 5% of each other)
          and your waist will be at least 25% smaller than both your
          bust/shoulders and hips.
        </p>
        <button className={styles.seeMoreButton}>see what fits you</button>
      </div>

      <div className={styles.bodyShape}>
        <h1>Apple Body Shape</h1>
        <img
          src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee9442a0258fa44591cb4bf_Apple%20Body%20Shape%201-p-500.webp"
          alt="Apple Body"
          className={styles.bodyShapeImage}
        />
        <p>
          Your bust/shoulders and waist will be larger than your hips. Your
          waist will be the same or wider than your bust. Your hips will be the
          smallest - up to 5% smaller than bust/shoulders.
        </p>
        <button className={styles.seeMoreButton}>see what fits you</button>
      </div>
    </div>
  );
}

export default BodyShape;
