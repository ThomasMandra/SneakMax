import Button from "../UI/Button";
import styles from "./CatalogFilter.module.css";
import PriceSlider from "../UI/PriceSlider";
import { useEffect, useState } from "react";
import boots from "../../data/boots";

function CatalogFilter({ setItems }) {
  const MAX_RANGE = 50000;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(MAX_RANGE);
  const [rangeLeft, setRangeLeft] = useState(0);
  const [rangeRight, setRangeRight] = useState(0);

  const [size, setSize] = useState(new Set());

  const [filter, setFilter] = useState({
    priceMin: minPrice,
    priceMax: maxPrice,
    gender: "man",
    size: { size },
  });

  // function buttonActive(e) {
  //   e.target.classList.toggle(styles.activeButtonFilter);

  //   if (e.target.classList.contains(styles.activeButtonFilter)) {
  //     setFilter({
  //       ...filter,
  //       size: size.add(e.target.value),
  //     });
  //   } else {
  //     setFilter({
  //       ...filter,
  //       size: size.delete(e.target.value),
  //     });
  //   }

  //   console.log(filter);
  // }

  function inputChange(e) {
    if (e.target.id === "man") {
      setFilter({ ...filter, gender: "man" });
    } else if (e.target.id === "woomen") {
      setFilter({ ...filter, gender: "woomen" });
    }
  }

  function resetFilter(e) {
    e.preventDefault();
    setFilter({ ...filter, priceMin: 0, priceMax: 50000 });
    setMinPrice(0);
    setMaxPrice(50000);
    setMinVal(0);
    setMaxVal(50000);
    setRangeLeft(0);
    setRangeRight(0);
  }

  function applyFilter(e) {
    e.preventDefault();
    setFilter({
      ...filter,
      priceMax: maxPrice,
      priceMin: minPrice,
    });
  }

  useEffect(() => {
    let bootsFilter = boots.filter((boot) => {
      return (
        (boot.price > filter.priceMin) &
        (boot.price < filter.priceMax) &
        (boot.gender === filter.gender)
      );
    });

    setItems(bootsFilter);
  }, [filter]);

  return (
    <>
      <div className={styles.catalogFilter}>
        <form className={styles.form}>
          <legend>
            Подбор <br /> по параметрам
          </legend>
          <div>
            <label className={styles.filterName}>Цена, руб</label>
            <PriceSlider
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minVal={minVal}
              setMinVal={setMinVal}
              maxVal={maxVal}
              setMaxVal={setMaxVal}
              rangeLeft={rangeLeft}
              setRangeLeft={setRangeLeft}
              rangeRight={rangeRight}
              setRangeRight={setRangeRight}
            />
          </div>
          <div>
            <label className={styles.filterName}>Пол</label>
            <div className={styles.checkBoxForm}>
              <div>
                <input
                  className="checkBox"
                  name="gender"
                  type="radio"
                  id="man"
                  onChange={inputChange}
                  defaultChecked={true}
                />
                <label htmlFor="man">Мужчина</label>
              </div>
              <div>
                <input
                  className="checkBox"
                  name="gender"
                  type="radio"
                  id="woomen"
                  defaultChecked={false}
                  onChange={inputChange}
                />
                <label htmlFor="woomen">Женщина</label>
              </div>
            </div>
          </div>
          {/* <div>
            <label className={styles.filterName}>Размер</label>
            <div className={styles.sizeBlock}>
              <button
                type="button"
                onClick={buttonActive}
                style={{ borderTopLeftRadius: "4px" }}
                value={35}
              >
                35
              </button>
              <button type="button" value={36} onClick={buttonActive}>
                36
              </button>
              <button
                type="button"
                style={{ borderTopRightRadius: "4px" }}
                value={37}
                onClick={buttonActive}
              >
                37
              </button>
              <button type="button" value={38} onClick={buttonActive}>
                38
              </button>
              <button type="button" value={39} onClick={buttonActive}>
                39
              </button>
              <button type="button" value={40} onClick={buttonActive}>
                40
              </button>
              <button
                type="button"
                style={{ borderBottomLeftRadius: "4px" }}
                value={41}
                onClick={buttonActive}
              >
                41
              </button>
              <button type="button" value={42} onClick={buttonActive}>
                42
              </button>
              <button
                type="button"
                style={{ borderBottomRightRadius: "4px" }}
                value={43}
                onClick={buttonActive}
              >
                43
              </button>
            </div>
          </div> */}
          <div>
            <Button
              styleButton={2}
              style={{ width: "100%" }}
              onClick={applyFilter}
            >
              Применить
            </Button>
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <button className={styles.resetFilter} onClick={resetFilter}>
                сбросить
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CatalogFilter;
