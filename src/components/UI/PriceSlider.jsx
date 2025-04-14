import { useEffect, useState } from "react";
import styles from "./PriceSlider.module.css";

function PriceSlider({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minVal,
  setMinVal,
  maxVal,
  setMaxVal,
  rangeLeft,
  setRangeLeft,
  rangeRight,
  setRangeRight,
}) {
  const MAX_RANGE = 50000;
  const priceGap = 1000;

  const handlePriceInput = (e, type) => {
    const parsedValue = parseInt(e.target.value);
    if (type === "min") {
      setMinPrice(parsedValue);
    } else {
      setMaxPrice(parsedValue);
    }
  };

  const handlePriceInputChange = (e, type) => {
    const parsedValue = parseInt(e.target.value);

    if (parsedValue > MAX_RANGE && type === "max") {
      setMaxVal(MAX_RANGE);
      setMaxPrice(MAX_RANGE);
      setRangeRight(0);
      return;
    }

    if (parsedValue < 0 && type === "min") {
      setMinVal(0);
      setMinPrice(0);
      setRangeLeft(0);
      return;
    }

    if (type === "min") {
      if (maxVal - parsedValue < priceGap) {
        setMinVal(maxVal - priceGap);
        setMinPrice(maxVal - priceGap);
        setRangeLeft(((maxVal - priceGap) / MAX_RANGE) * 100);
      } else {
        setRangeLeft((parsedValue / MAX_RANGE) * 100);
        setMinVal(parsedValue);
        setMinPrice(parsedValue);
      }
    } else {
      if (parsedValue - minVal < priceGap) {
        setRangeRight(100 - ((minVal + priceGap) / MAX_RANGE) * 100);
        setMaxVal(minVal + priceGap);
        setMaxPrice(minVal + priceGap);
      } else {
        setRangeRight(100 - (parsedValue / MAX_RANGE) * 100);
        setMaxVal(parsedValue);
        setMaxPrice(parsedValue);
      }
    }
  };

  const handleRangeInputChange = (e) => {
    const { className, value } = e.target;
    const parsedValue = parseInt(value);

    if (className === `${styles.rangeMin}`) {
      if (maxVal - parsedValue < priceGap) {
        setMinVal(maxVal - priceGap);
        setMinPrice(maxVal - priceGap);
        setRangeLeft(((maxVal - priceGap) / MAX_RANGE) * 100);
      } else {
        setRangeLeft((parsedValue / MAX_RANGE) * 100);
        setMinVal(parsedValue);
        setMinPrice(parsedValue);
      }
    } else {
      if (parsedValue - minVal < priceGap) {
        setRangeRight(100 - ((minVal + priceGap) / MAX_RANGE) * 100);
        setMaxVal(minVal + priceGap);
        setMaxPrice(minVal + priceGap);
      } else {
        setRangeRight(100 - (parsedValue / MAX_RANGE) * 100);
        setMaxVal(parsedValue);
        setMaxPrice(parsedValue);
      }
    }
  };

  return (
    <>
      <div className={styles.filter}>
        <label className={styles.filterLabel}>
          <input
            type="number"
            value={minPrice}
            className={`${styles.filterInput} ${styles.inputMin}`}
            onBlur={(e) => handlePriceInputChange(e, "min")}
            onChange={(e) => handlePriceInput(e, "min")}
          />
        </label>

        <label className={styles.filterLabel}>
          <input
            type="number"
            value={maxPrice}
            className={`${styles.filterInput} ${styles.inputMax}`}
            onBlur={(e) => handlePriceInputChange(e, "max")}
            onChange={(e) => handlePriceInput(e, "max")}
          />
        </label>
      </div>
      <div>
        <div className={styles.slider}>
          <div
            className={styles.progress}
            style={{ left: `${rangeLeft}%`, right: `${rangeRight}%` }}
          ></div>
        </div>
        <div className={styles.rangeInput}>
          <input
            type="range"
            className={styles.rangeMin}
            min="0"
            max={MAX_RANGE}
            value={minVal}
            step={priceGap}
            onChange={handleRangeInputChange}
          />
          <input
            type="range"
            className={styles.rangeMax}
            min="0"
            max={MAX_RANGE}
            value={maxVal}
            step={priceGap}
            onChange={handleRangeInputChange}
          />
        </div>
      </div>
    </>
  );
}

export default PriceSlider;
