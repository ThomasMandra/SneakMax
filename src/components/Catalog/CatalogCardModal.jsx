import { useEffect, useState } from "react";
import styles from "./CatalogCardModal.module.css";

import boots from "../../data/boots";
import { useSelector } from "react-redux";

function CatalogCardModal({ visible = false, onClose, idElement }) {
  const [isImageUrl, setImageUrl] = useState(
    "https://avatars.mds.yandex.net/i?id=7b4d9498bebe06d443b6d0978c047e8a_l-5354312-images-thumbs&n=13"
  );
  const product = useSelector((state) => state.product);

  function imageHandler(e) {
    setImageUrl(e.target.src);
  }

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

  let itemModal = boots.find((el) => el.id === idElement);

  let existingItemModal = product.itemList.filter(
    (item) => item.id === itemModal.id
  );

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalDialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>
            <span className={`${styles.modalHeaderClose}`} onClick={onClose}>
              +
            </span>
            <div className={styles.modalContentHeader}>
              <div>
                <div className={styles.modalContentImageMainContainer}>
                  <img
                    className={styles.modalContentImageMain}
                    src={isImageUrl}
                    alt=""
                  />
                </div>
                <ul className={styles.modalContentImageList}>
                  <li>
                    <img src={itemModal.url} onClick={imageHandler} alt="" />
                  </li>
                  <li>
                    <img
                      src="https://blog.sneakerhead.ru/content/images/size/w1000/2023/03/https---hypebeast.com-image-2023-03-tiffany-co-nike-air-force-1-friends-and-family-info-002.jpg-1.webp"
                      onClick={imageHandler}
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="https://ae04.alicdn.com/kf/Sb9532bb9905e4bd6b20ae9227cead0f1K.jpg"
                      onClick={imageHandler}
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div>
                <div className={styles.modalContentArticle}>
                  <p>Артикул: 879876</p>
                  <p>
                    В наличии: <span>13 шт</span>
                  </p>
                </div>
                <div className={styles.modalContentEstimate}>
                  <h4>
                    {itemModal.gender === "man" ? "Мужские" : "Женские"}{" "}
                    {itemModal.name}
                  </h4>
                </div>
                <div className={styles.modalContentPrice}>
                  Цена {itemModal.price} ₽{" "}
                </div>
                <div className={styles.modalContentProperty}>
                  <h5>Характеристика</h5>
                  <p>Пол: Мужской</p>
                  <p>Цвета: Разноцветный</p>
                  <p>Состав: Кожа, текстиль, резина</p>
                  <p>Страна: Вьетнам</p>
                </div>
              </div>
            </div>
            <div className={styles.modalContentMain}>
              <div className={styles.modalContentDescription}>
                <h5>Описание</h5>
                <p>
                  Кроссовки Nike Blazer Mid '77 Vintage Suede с винтажной
                  подошвой возрождают стиль баскетбольных моделей Nike прошлого,
                  создавая впечатление, что они хранились в шкафу долгие годы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogCardModal;
