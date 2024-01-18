import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={"/selo-animation-luz.webp"}
        alt=""
        width={1000}
        height={1000}
      />

      <Image src={"/bytebushidobrazao.png"} alt="" width={300} height={300} />

      <div>
        <h1 className={styles.title}>
          Participe da maior comunidade de tecnologia!
        </h1>
        <p className={styles.paragrafo}>
          A plataforma completa pra você aprender programação do zero no seu
          ritmo, se tornar Full Stack e se especializar em diversas tecnologias.
        </p>
      </div>
    </div>
  );
};

export default About;
