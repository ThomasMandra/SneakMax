import { useState } from "react";
import styles from "./CatalogList.module.css";
import Button from "../UI/Button";
import CatalogCardModal from "./CatalogCardModal";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../productBusket/productBusket.slice";

function CatalogList({ items }) {
  const dispatch = useDispatch();

  function addToBusketProduct(e) {
    const idProduct = +e.target.getAttribute("data-id");

    const productToBasket = items.find((el) => el.id === idProduct);

    dispatch(addToBasket(productToBasket));
  }

  const [visible, setVisible] = useState(9);
  const [isIdElement, setIdElement] = useState(0);
  const [isModal, setModal] = useState(false);
  const openModal = (e) => {
    setIdElement(+e.target.getAttribute("data-id"));
    setModal(true);
  };
  const onCloseModal = () => {
    setModal(false);
  };

  const handleShowMorePosts = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <div>
      <div className={styles.catalogList}>
        {items.slice(0, visible).map((el, index) => {
          return (
            <div className={`${styles.catalogCard}`} key={index}>
              <div className={styles.catalogImgBlock}>
                <img className={styles.catalogImg} src={el.url}></img>
              </div>
              <p className={styles.catalogName}>
                Кроссовки {el.gender === "man" ? "мужские" : "женские"}{" "}
                {el.name}
              </p>
              <p className={styles.catalogPrice}>{+el.price}</p>
              <div className={styles.cardClick}>
                <button data-id={el.id} onClick={addToBusketProduct}></button>
                <button data-id={el.id} onClick={openModal}></button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {visible >= items.length ? (
          " "
        ) : (
          <Button
            styleButton={1}
            style={{ margin: "0 auto" }}
            onClick={handleShowMorePosts}
          >
            Показать ещё
          </Button>
        )}
      </div>
      <CatalogCardModal
        visible={isModal}
        onClose={onCloseModal}
        idElement={isIdElement}
      />
    </div>
  );
}

export default CatalogList;
