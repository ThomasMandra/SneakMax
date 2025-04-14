import styles from './CatalogList.module.css';

const CatalogItem = ({ postsToRender }) => {
  return (
    <>
      {postsToRender.map((el, index) => {
        return (
          <div className={`${styles.catalogCard}`} key={index}>
            <img className={styles.catalogImg} src={el.url} />
            <p className={styles.catalogName}>Кроссовки {el.name}</p>
            <p className={styles.catalogPrice}>{+el.price}</p>
          </div>
        );
      })}
    </>
  );
};
export default CatalogItem;
