import React, { useState } from "react";
import styles from "./Benefits.module.css";
import Image from "next/image";
const Benefits = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isContentVisible0, setIsContentVisible0] = useState(false);
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
    setIsContentVisible0(false);
  };
  const toggleContent0 = () => {
    setIsContentVisible(false);
    setIsContentVisible0(!isContentVisible0);
  };

  return (
    <div className={styles.container}>
      <h1>É totalmente gratuito ?</h1>
      <div className={styles.gratuito}>
        <h2 onClick={toggleContent}>Sim!</h2>
        {isContentVisible && (
          <p>
            Nosso curso é oferecido de forma gratuita para todos os
            participantes. No entanto, para aqueles que desejam contribuir e
            apoiar ainda mais a iniciativa, oferecemos conteúdos exclusivos para
            doadores. Ao fazer uma contribuição, os créditos correspondentes são
            devolvidos ao seu perfil, permitindo a troca por conteúdos
            adicionais destinados especialmente aos contribuidores.
          </p>
        )}
        <h1>Tem suporte ?</h1>
        <h2 onClick={toggleContent0}>Sim!</h2>
        {isContentVisible0 && (
          <p>
            ByteBushido conta com suporte integrado dentro da plataforma. Temos
            um fórum vibrante onde a comunidade ByteBushido se reúne para se
            ajudar mutuamente. Nosso curso é focado na interação entre
            programadores, incentivando uma colaboração ativa onde cada membro
            contribui para o crescimento coletivo. ByteBushido não é apenas um
            curso, é uma família onde a jornada de aprendizado é compartilhada e
            celebrada juntos.
          </p>
        )}
      </div>
      <div className={styles.sequenci}>
        <div>
          <Image
            className={styles.raios}
            src={"/raios.png"}
            alt=""
            width={50}
            height={50}
          />
          <h1 className={styles.title}>
            Sequências de <br /> cursos organizados <br /> em Formações
          </h1>
          <p>
            Formações com conteúdo do mercado de trabalho: <br /> sequências de
            cursos e conteúdo para você se <br /> capacitar em tecnologia e
            negócios digitais.
          </p>
        </div>
        <Image
          className={styles.img}
          src={"/ninja.png"}
          alt=""
          width={400}
          height={400}
        />
      </div>
      <Image
        className={styles.luz}
        src={"/selo-animation-luz.webp"}
        alt=""
        width={500}
        height={500}
      />
    </div>
  );
};

export default Benefits;
