import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className={styles.container}>
      <h1>
        Transforme sua carreira em <br />
        programação na ByteBushido
      </h1>
      <Link className={styles.link} href={"/"}>
        COMECE A ESTUDAR AGORA
      </Link>
    </div>
  );
};

export default Banner;
