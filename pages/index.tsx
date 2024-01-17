import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Menu from "./components/navBar/Menu";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <h1>Test</h1>
    </div>
  );
};

export default Home;
