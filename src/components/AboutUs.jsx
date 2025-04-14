import style from "./AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <div className={style.aboutUs}>
        <div className={style.aboutUsInfo}>
          <h3>Пара слов о нас</h3>
          <p>
            Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
            спорт мы можем менять жизни. В том числе с помощью воодушевляющих
            историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед.{" "}
          </p>
          <span>SneakMax</span>
        </div>
        <div className={style.aboutUsImg}></div>
      </div>
    </>
  );
}

export default AboutUs;
