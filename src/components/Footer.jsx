import styles from "./Menu.module.css";

function Footer() {
  return (
    <>
      <nav className={styles.menu} style={{ borderBottom: "none" }}>
        <a to="panda" className={styles.logo}>
          SneakMax
        </a>
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
        </ul>
      </nav>
    </>
  );
}

export default Footer;
