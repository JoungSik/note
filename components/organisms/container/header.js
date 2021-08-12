import styles from "../../../styles/container/header.module.css";

const HeaderContainer = ({}) => {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.header_sub_title}>Note</div>
        <div className={styles.header_title}>아이디어를 메모하고 실현하는 곳</div>
      </div>
    </header>
  );
};

export default HeaderContainer;
