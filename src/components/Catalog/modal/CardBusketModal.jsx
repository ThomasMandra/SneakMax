import { deleteToBasket } from "../../../productBusket/productBusket.slice";
import styles from "./CardBusketModal.module.css";
import { useDispatch, useSelector } from "react-redux";

function CardBusketModal({ padding = "10px 20px" }) {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  function deleteProduct(e) {
    const idProduct = +e.target.getAttribute("data-elid");
    const productToBasket = product.itemList.find((el) => el.id === idProduct);

    dispatch(deleteToBasket(productToBasket));
  }

  if (product.totalQuantity === 0)
    return <div className={styles.basketEmpty}>Корзина пуста</div>;

  return (
    <>
      {product.itemList.map((el) => {
        return (
          <li
            key={el.id}
            className={`${styles.cardBusketModal} ${
              padding === "10px 20px" ? styles.cardBusketModalHover : " "
            }`}
            style={{ padding: padding }}
          >
            <img src={el.url} alt="" width={100} />
            <div className={styles.cardBusketModalInfo}>
              <h4>{el.name}</h4>
              <p>Количество: {el.quantity}</p>
              <span>{el.price}</span>
            </div>
            <button>
              <img
                data-elid={el.id}
                onClick={deleteProduct}
                src="img/utilsIcons/busketDeleteIcon.svg"
                alt=""
              />
            </button>
          </li>
        );
      })}
    </>
  );
}

export default CardBusketModal;
