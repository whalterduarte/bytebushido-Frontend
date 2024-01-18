import Image from "next/image";
import React from "react";
import styles from "./Invite.module.css";
import { HiArrowDown } from "react-icons/hi2";
const Invite = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={"/content-section-bg.webp"}
        alt=""
        width={1440}
        height={500}
      />
      <div>
        <h2>Tudo em um so lugar_</h2>
        <h1>
          Chega de comprar cursos! Aqui você <br />
          encontra tudo que precisa pra <br />
          crescer na carreira em programação
        </h1>
        <p>
          Veja todos os benefícios exclusivos da ByteBushido <br />
          <br />
          <HiArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Invite;
