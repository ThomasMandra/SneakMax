import Menu from "./Menu";
import styles from "./Header.module.css";
import Button from "./UI/Button";

function Header(scollToRef) {
  return (
    <>
      <div className={styles.header}>
        <Menu />
        <div className={styles.headerInfo}>
          <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
          <p>
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <Button styleButton={1} style={{ padding: "0 0" }}>
            <a className={styles.headerInfoLink} href="#catalog">
              Перейти к покупкам
            </a>
          </Button>
        </div>
        <div className={styles.headerLogoBcg}>SneakMax</div>
      </div>
    </>
  );
}

export default Header;
