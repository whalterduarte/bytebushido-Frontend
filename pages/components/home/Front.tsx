import React from "react";
import styles from "./Front.module.css";
import Image from "next/image";
import Card from "../cardHome/Card";

const Front = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <h1>
            Cursos de <span>Tecnologia!</span>
          </h1>
          <p>Desperte seu lado tech e comece a bytear pela inovação!</p>
        </div>
        <div>
          <Image
            className={styles.raio}
            quality={100}
            src={"/raios.png"}
            alt="Ninja"
            width={100}
            height={50}
          />

          <Card />
        </div>
      </div>
      <div className={styles.photo}>
        <Image
          quality={100}
          src={"/ninja2.png"}
          alt="Ninja"
          width={450}
          height={600}
        />
      </div>
    </div>
  );
};

export default Front;
