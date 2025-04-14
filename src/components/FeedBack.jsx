import Button from "./UI/Button";
import styles from "./FeedBack.module.css";

function FeedBack() {
  return (
    <div className={styles.feedBack}>
      <div className={styles.feedBackForm}>
        <h3>Есть вопросы?</h3>
        <p>Заполните форму и наш менеджер свяжется с вами</p>
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="number" placeholder="Номер телефона" />
          <Button styleButton={1}>Отправить</Button>
        </form>
      </div>
      <div className={styles.feedBackImage}>
        <div>
          <img
            src="../../public/img/feedBackImg-2.jpg"
            alt=""
            max-width={157}
            max-height={160}
          />
          <img
            src="../../public/img/feedBackImg-3.jpg"
            alt=""
            max-width={157}
            max-height={160}
          />
        </div>
        <img
          src="../../public/img/feedBackImg-1.jpg"
          alt=""
          max-width={330}
          max-height={336}
        />
        <div>
          <img
            src="../../public/img/feedBackImg-4.jpg"
            alt=""
            max-width={157}
            max-height={160}
          />
          <img
            src="../../public/img/feedBackImg-5.jpg"
            alt=""
            max-width={157}
            max-height={160}
          />
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
