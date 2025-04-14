import SliderBlockBoots from "./SliderBlockBoots";
import styles from "./SliderBlock.module.css";
import Button from "./UI/Button";
import sliderBootsSize from "../assets/sliderBootsSize.jpg";
import sliderMobileGet from "../assets/sliderMobileGet.svg";
import { useEffect, useState } from "react";

function SliderBlock() {
  const widthSlider = 1180;

  const [nextPage, setNextPage] = useState(1);

  function sendForm(e) {
    e.preventDefault();
    let img = document.getElementById("imgFormSend");
    img.style.top = "15px";
  }

  function nextForm(e) {
    e.preventDefault();
    setNextPage(nextPage + 1);
    // setFormNext(formNext + widthSlider);
    // const btnClass = e.target.className;
    // let btn = document.querySelector(`.${btnClass}`);
    // btn.closest("#sliderItem").style.transform = `translateX(-${formNext}px)`;
  }

  return (
    <>
      <ul
        className={styles.sliderList}
        id="sliderItem"
        style={{ transform: "translateX(0px)" }}
      >
        {nextPage === 1 ? (
          <li className={styles.sliderItem}>
            <h3 className={styles.sliderItemTitle}>
              Мы подберем идеальную пару для вас
            </h3>
            <p className={styles.sliderItemText}>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями{" "}
            </p>
            <h4 className={styles.sliderItemQuest}>
              Какой тип кроссовок рассматриваете?
            </h4>
            <div className={styles.sliderBootsList}>
              <SliderBlockBoots boots={"sneakers"} />
              <SliderBlockBoots boots={"sneakers1"} />
              <SliderBlockBoots boots={"sneakers2"} />
              <SliderBlockBoots boots={"sneakers3"} />
              <SliderBlockBoots boots={"sneakers4"} />
              <SliderBlockBoots boots={"sneakers5"} />
            </div>
            <div className={styles.sliderPgn}>
              <div className="paggination">1 из 3</div>
              <Button styleButton={3} onClick={nextForm}>
                Следующий шаг
              </Button>
            </div>
          </li>
        ) : nextPage === 2 ? (
          <li className={styles.sliderItem}>
            <h3 className={styles.sliderItemTitle}>
              Мы подберем идеальную пару для вас
            </h3>
            <p className={styles.sliderItemText}>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями
            </p>
            <h4 className={styles.sliderItemQuest}>
              Какой размер вам подойдет?
            </h4>

            <ul className={styles.sliderSizeBootList}>
              <li className={styles.sliderSizeBoot}>
                <input
                  className="checkBox"
                  type="checkbox"
                  id="sizeBootsSlider_1"
                  name="size"
                />
                <label
                  for="sizeBootsSlider_1"
                  className={"styles.sliderBootsLabel"}
                >
                  менее 36
                </label>
              </li>
              <li className={styles.sliderSizeBoot}>
                <input
                  className="checkBox"
                  type="checkbox"
                  id="sizeBootsSlider_2"
                  name="size"
                />
                <label
                  for="sizeBootsSlider_2"
                  className={"styles.sliderBootsLabel"}
                >
                  36-38
                </label>
              </li>
              <li className={styles.sliderSizeBoot}>
                <input
                  className="checkBox"
                  type="checkbox"
                  id="sizeBootsSlider_3"
                  name="size"
                />
                <label
                  for="sizeBootsSlider_3"
                  className={"styles.sliderBootsLabel"}
                >
                  39-41
                </label>
              </li>
              <li className={styles.sliderSizeBoot}>
                <input
                  className="checkBox"
                  type="checkbox"
                  id="sizeBootsSlider_4"
                  name="size"
                />
                <label
                  for="sizeBootsSlider_4"
                  className={"styles.sliderBootsLabel"}
                >
                  42-44
                </label>
              </li>
              <li className={styles.sliderSizeBoot}>
                <input
                  className="checkBox"
                  type="checkbox"
                  id="sizeBootsSlider_5"
                  name="size"
                />
                <label
                  for="sizeBootsSlider_5"
                  className={"styles.sliderBootsLabel"}
                >
                  45 и больше
                </label>
              </li>
            </ul>

            <img src={sliderBootsSize} className={styles.sliderBootsLine} />
            <div className={styles.sliderPgn}>
              <div className="paggination">2 из 3</div>
              <Button styleButton={3} onClick={nextForm}>
                Следующий шаг
              </Button>
            </div>
          </li>
        ) : nextPage === 3 ? (
          <li className={styles.sliderItem}>
            <h3 className={styles.sliderItemTitle}>
              Мы подберем идеальную пару для вас
            </h3>
            <p className={styles.sliderItemText}>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями{" "}
            </p>
            <h4 className={styles.sliderItemQuest}>
              Уточните какие-либо моменты
            </h4>
            <div className={styles.sliderTextAreaBlock}>
              <textarea
                className={styles.sliderTextArea}
                placeholder="Введите сообщение"
              />
            </div>

            <div className={styles.sliderPgn}>
              <div className="paggination">3 из 3</div>
              <Button styleButton={3} onClick={nextForm}>
                Следующий шаг
              </Button>
            </div>
          </li>
        ) : nextPage === 4 ? (
          <li className={styles.sliderItem}>
            <h3 className={styles.sliderItemTitle}>Ваша подборка готова!</h3>
            <p
              className={styles.sliderItemText}
              style={{
                fontSize: "18px",
                color: "var(--small-text)",
                borderBottom: "1px solid var(--small-text)",
                paddingBottom: "24px",
              }}
            >
              Оставьте свои контактные данные, чтобы бы мы могли отправить
              подготовленный для вас каталог
            </p>

            <form className={styles.sliderFormContainer}>
              <div className={styles.sliderFormEnd}>
                <h4>Получить предложение</h4>
                <p>Получите подборку подходящих для вас моделей на почту</p>
                <input
                  type="text"
                  className={styles.sliderFormEndInput}
                  placeholder="Ваше имя"
                ></input>
                <input
                  type="email"
                  className={styles.sliderFormEndInput}
                  placeholder="E-mail"
                ></input>
                <Button styleButton={1} onClick={sendForm}>
                  Получить
                </Button>
              </div>

              <div className={styles.sliderFormMobile}>
                <img
                  className={`${styles.sliderFormMobileImg}`}
                  src={sliderMobileGet}
                  alt=""
                  id="imgFormSend"
                />
              </div>
            </form>
          </li>
        ) : (
          ""
        )}

        {/* <li
            className={styles.sliderItem}
            style={{ minWidth: `${widthSlider}px` }}
          >
            <h3 className={styles.sliderItemTitle}>
              Мы подберем идеальную пару для вас
            </h3>
            <p className={styles.sliderItemText}>
              Ответьте на три вопроса и мы вышлем каталог с самыми подходящими
              для вас моделями{" "}
            </p>
            <h4 className={styles.sliderItemQuest}>
              Какой тип кроссовок рассматриваете?
            </h4>
            <div className={styles.sliderBootsList}>
              <SliderBlockBoots boots={"sneakers"} />
              <SliderBlockBoots boots={"sneakers1"} />
              <SliderBlockBoots boots={"sneakers2"} />
              <SliderBlockBoots boots={"sneakers3"} />
              <SliderBlockBoots boots={"sneakers4"} />
              <SliderBlockBoots boots={"sneakers5"} />
            </div>
            <div className={styles.sliderPgn}>
              <div className="paggination">1 из 3</div>
              <Button styleButton={3} onClick={nextForm}>
                Следующий шаг
              </Button>
            </div>
          </li> */}
      </ul>
    </>
  );
}

export default SliderBlock;
