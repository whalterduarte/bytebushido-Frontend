import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Menu from "./components/navBar/Menu";
import Front from "./components/home/Front";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Invite from "./components/invite/Invite";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.navBar}>
        <Menu />{" "}
      </div>
      <div className={styles.Front}>
        <Front />
      </div>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div>
        <br />
        <Invite />
      </div>
    </>
  );
};

export default Home;
