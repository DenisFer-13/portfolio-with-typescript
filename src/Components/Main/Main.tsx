import Cv from "../Cv/Cv";
import Projects from "../Projects/Projects";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <div style={{marginTop:"80px"}}>
        <h3 className={styles.h3}>Hi there! I'm</h3>
        <h1 className={styles.h1}>DENIS FERREYRA</h1>
        <h2 className={styles.h2}>Full Stack Developer</h2>
      </div>
      <Cv />
      <Projects />
    </main>
  );
}

export default Main;
