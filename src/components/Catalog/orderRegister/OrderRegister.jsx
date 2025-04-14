import { useEffect } from "react";
import styles from "./OrderRegister.module.css";
import CardBusketModal from "../modal/CardBusketModal";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";

function OrderRegister({ visible = false, onClose }) {
  const product = useSelector((state) => state.product);

  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  // https://ru.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <span className={`${styles.modalHeaderClose}`} onClick={onClose}>
            +
          </span>
          <h3 className={styles.modalTitle}>Оформление заказа</h3>
          <span>Заказ 3456 67</span>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>
            <p>Товаров в заказе: {product.totalQuantity} шт</p>
            <p>Общая сумма заказа: {product.priceAll} ₽</p>
            <ul className={styles.modalContentList}>
              <CardBusketModal padding={"0 0"} />
            </ul>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <form className={styles.modalFooterForm}>
            <input type="text" placeholder="Ваше имя" />
            <input type="number" placeholder="Номер телефона" />
            <input type="email" placeholder="E-mail" />
          </form>
          <Button styleButton={1}>Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
}

export default OrderRegister;
