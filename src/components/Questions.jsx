import styles from "./Questions.module.css";

function Questions() {
  return (
    <div className={styles.questBlock}>
      <h3>Часто задаваемые вопросы</h3>
      <div>
        <details
          open
          className={`${styles.questBlockItem} ${styles.questBlockItemTopLine} `}
        >
          <summary>Вопрос 1</summary>
          <p>Скандинавская мифология — мифология древних скандинавов</p>
        </details>
        <details className={styles.questBlockItem}>
          <summary>Вопрос 2</summary>
          <p>Основным источником сведений о ней являются тексты поэтической </p>
        </details>
      </div>
    </div>
  );
}

export default Questions;
