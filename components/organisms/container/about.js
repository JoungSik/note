import styles from "../../../styles/container/about.module.css";

const AboutContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2>Note</h2>
        <p>아이디어를 메모하고 실현하는 곳</p>
        <button type={"button"} className={"btn btn-primary"} onClick={() => alert("아직 만드는중")}>만들어진 아이디어</button>
      </div>
    </div>
  );
};

export default AboutContainer;
