import styles from "./OurTeam.module.css";

function OurTeam() {
  return (
    <div className={styles.ourTeam}>
      <h3>Наша команда</h3>
      <ul className={styles.ourTeamList}>
        <li className={styles.ourTeamItem}>
          <img src="img/team/myTeam1.jpg" width="380" height="400" />
          <h4>Максим Золотарев</h4>
          <p>Администратор</p>
        </li>
        <li className={styles.ourTeamItem}>
          <img src="img/team/myTeam_2.jpg" width="380" height="400" />
          <h4>Максим Золотарев</h4>
          <p>Администратор</p>
        </li>
        <li className={styles.ourTeamItem}>
          <img src="img/team/myTeam_3.jpg" width="380" height="400" />
          <h4>Максим Золотарев</h4>
          <p>Администратор</p>
        </li>
        <li className={styles.ourTeamItem}>
          <img src="img/team/myTeam_4.jpg" width="380" height="400" />
          <h4>Максим Золотарев</h4>
          <p>Администратор</p>
        </li>
        <li className={styles.ourTeamItem}>
          <img src="img/team/myTeam_5.jpg" width="380" height="400" />
          <h4>Максим Золотарев</h4>
          <p>Администратор</p>
        </li>
        <li className={styles.ourTeamItem}>
          <img src="img/team/myTeam_6.jpg" width="380" height="400" />
          <h4>Максим Золотарев</h4>
          <p>Администратор</p>
        </li>
      </ul>
    </div>
  );
}

export default OurTeam;
