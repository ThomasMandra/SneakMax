import bootsImg from "./../assets/sliderBoots.jpg";
import styles from "./SliderBlockBoots.module.css";

function SliderBlockBoots({ boots }) {
  return (
    <>
      <div className={styles.sliderBootItem}>
        <img
          className={styles.sliderBootImg}
          src={bootsImg}
          alt="BigCo Inc. logo"
        />
        <div className={styles.sliderBoot}>
          <input className="checkBox" type="checkbox" id={boots} name="boots" />
          <label htmlFor={boots} className={styles.sliderBootsLabel}>
            кеды
          </label>
        </div>
      </div>
    </>
  );
}

export default SliderBlockBoots;
