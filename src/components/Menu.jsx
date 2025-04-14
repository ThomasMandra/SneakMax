import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { useState } from "react";
import ModalBusket from "./Catalog/modal/ModalBusket";
import BurgerMenu from "./Catalog/burgerMenu/BurgerMenu";

function Menu() {
  const [isModal, setModal] = useState(false);
  const [isBurgerMenu, setBurgerMenu] = useState(false);
  const onCloseModal = () => setModal(false);
  const onCloseBurgerMenu = () => setBurgerMenu(false);

  return (
    <nav className={styles.menu}>
      <Link to="/" className={styles.logo}>
        SneakMax
      </Link>
      <ul className={styles.nav}>
        <li>
          <a href="#catalog">Каталог</a>
        </li>
        <li>
          <a href="#aboutUs">О нас</a>
        </li>
        <li>
          <a href="#sliderBlock">Подбор товара</a>
        </li>
        <li>
          <a href="#ourTeam">Наша команда</a>
        </li>
        <li>
          <a href="#quest">Доставка и оплата</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
        <li>
          <button
            className={styles.menuButton}
            onClick={() => setModal(true)}
            style={{
              background: "var(--bg)",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Корзина
          </button>
          <ModalBusket
            visible={isModal}
            title="Заголовок"
            content={"Что-то важное"}
            footer={""}
            onClose={onCloseModal}
          />
        </li>
      </ul>

      <BurgerMenu
        visible={isBurgerMenu}
        setBurgerMenu={setBurgerMenu}
        onClose={onCloseBurgerMenu}
      />
    </nav>
  );
}

export default Menu;
