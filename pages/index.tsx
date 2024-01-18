import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Menu from "./components/navBar/Menu";
import Front from "./components/home/Front";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.navBar}>
        <Menu />{" "}
      </div>
      <div className={styles.Front}>
        <Front />
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
