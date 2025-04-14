import styles from "./BurgerMenu.module.css";
import CardBusketModal from "../modal/CardBusketModal";
import OrderRegister from "../orderRegister/OrderRegister";
import Button from "../../UI/Button";
import { useState } from "react";

function BurgerMenu({ visible, onClose, setBurgerMenu }) {
  const [isOrderRegister, setOrderRegister] = useState(false);
  const onCloseOrderRegister = () => {
    setOrderRegister(false);
  };

  function burgerMenuHandle() {
    setBurgerMenu(true);
  }

  if (!visible)
    return (
      <button className={styles.burgerNavButton} onClick={burgerMenuHandle}>
        <img src="../../public/img/utilsIcons/burgerMenu.svg" width={50} />
      </button>
    );

  return (
    <>
      <div className={styles.burgerNav} onClick={onClose}>
        <div
          className={`${styles.burgerNavBody}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${styles.burgerNavHeader}`}>
            <span
              className={`${styles.burgerNavHeaderClose}`}
              onClick={onClose}
            >
              +
            </span>
          </div>
          <ul className={styles.navBurgerMenu}>
            <li>
              <a href="#catalog" onClick={onClose}>
                Каталог
              </a>
            </li>
            <li>
              <a href="#aboutUs" onClick={onClose}>
                О нас
              </a>
            </li>
            <li>
              <a href="#sliderBlock" onClick={onClose}>
                Подбор товара
              </a>
            </li>
            <li>
              <a href="#ourTeam" onClick={onClose}>
                Наша команда
              </a>
            </li>
            <li>
              <a href="#quest" onClick={onClose}>
                Доставка и оплата
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={onClose}>
                Контакты
              </a>
            </li>
          </ul>
          <ul className={styles.navBurgerMenuBasket}>
            <CardBusketModal />
          </ul>

          <Button styleButton={1} onClick={() => setOrderRegister(true)}>
            Перейти к оформлению
          </Button>
          <div className={styles.navBurgerMenuOrder}>
            <OrderRegister
              visible={isOrderRegister}
              onClose={onCloseOrderRegister}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
