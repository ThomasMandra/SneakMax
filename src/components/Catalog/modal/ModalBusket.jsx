import { useEffect, useState } from "react";
import styles from "./ModalBusket.module.css";
import Button from "../../UI/Button";
import CardBusketModal from "./CardBusketModal";
import OrderRegister from "../orderRegister/OrderRegister";
import { useSelector } from "react-redux";

const ModalBusket = ({ visible = false, onClose }) => {
  const product = useSelector((state) => state.product);

  const [isOrderRegister, setOrderRegister] = useState(false);
  const onCloseOrderRegister = () => {
    setOrderRegister(false);
  };

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
    if (visible) {
      document.body.style.overflowY = "hidden";
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) {
    document.body.style.overflowY = "auto";
    return null;
  }

  // или возвращаем верстку модального окна
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContainer}>
        <div
          className={styles.modalDialog}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalBody}>
            <div className={styles.modalContent}>
              <ul>
                <CardBusketModal />
              </ul>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <div className={styles.modalFooterContent}>
              <div className={styles.modalFooterPrice}>
                <p>Итого:</p>
                <span>{product.priceAll}</span>
              </div>
              <Button styleButton={1} onClick={() => setOrderRegister(true)}>
                Перейти к оформлению
              </Button>

              <OrderRegister
                visible={isOrderRegister}
                onClose={onCloseOrderRegister}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBusket;
