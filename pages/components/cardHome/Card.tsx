import React from "react";
import styles from "./Card.module.css";
import { SiAngular, SiJavascript } from "react-icons/si";
import { FaReact, FaSass, FaJava, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { TbBrandKotlin } from "react-icons/tb";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainCard}>
        <div className={`${styles.card} ${styles.card1}`}>
          <div className={styles.cardInfo}>
            <SiAngular />
            <br />
            <h2>Aprende Angular</h2>
            <p>Projetos reais de Angular Fullstack</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <div className={styles.cardInfo}>
            <FaReact />
            <br />
            <h2>Mergulhe no Mundo do React Native</h2>
            <p>Criando aplicativos móveis com React Native.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <div className={styles.cardInfo}>
            <FaSass />
            <br />
            <h2>Estilizando com Sass e Tailwind CSS</h2>
            <p>Aprofundando-se no Front-End CSS</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
          <div className={styles.cardInfo}>
            <TbBrandKotlin />
            <br />
            <h2>Construindo Aplicações com Kotlin</h2>
            <p>Integração com diferentes tecnologias e bibliotecas.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card5}`}>
          <div className={styles.cardInfo}>
            <SiNextdotjs />
            <br />
            <h2>Desenvolvimento com NextJs</h2>
            <p>Construindo aplicações do client</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card6}`}>
          <div className={styles.cardInfo}>
            <FaJava />
            <br />
            <h2>Desenvolvimento Fullstack com Java</h2>
            <p>Explorando o ecossistema Java para aplicações web.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card7}`}>
          <div className={styles.cardInfo}>
            <FaNodeJs />
            <br />
            <h2>APIs com Node.js e Express</h2>
            <p>Construção de APIs robustas utilizando Node.js e Express.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card8}`}>
          <div className={styles.cardInfo}>
            <SiJavascript />
            <br />
            <h2>Dominando JavaScript</h2>
            <p>Explorando os fundamentos do basico ao avançados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
