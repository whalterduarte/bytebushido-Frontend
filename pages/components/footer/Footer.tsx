import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { RiDiscordLine } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaSquareYoutube } from "react-icons/fa6";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h1>Comece a estudar</h1>
          <Link className={`${styles.button} ${styles.cad} `} href={"/"}>
            Cadastre-se
          </Link>
          <Link className={`${styles.button} ${styles.fal} `} href={"/"}>
            Fale conosco
          </Link>
        </div>
        <div>
          <span className={styles.titleBlog}>Blog</span>
          <div className={styles.mid}>
            <Link className={`${styles.urls}`} href={"/"}>
              Blog ByteBushido
            </Link>
            <Link className={`${styles.urls}`} href={"/"}>
              Noticias de Cursos
            </Link>
            <Link className={`${styles.urls}`} href={"/"}>
              Carereira de Whalter
            </Link>
          </div>
        </div>
        <div>
          <span className={styles.titleBlog}>Suporte</span>
          <div className={styles.right}>
            <Link className={`${styles.urls}`} href={"/"}>
              Central de ajuda
            </Link>
            <Link className={`${styles.urls}`} href={"/"}>
              Comunidade discord
            </Link>
            <Link className={`${styles.urls}`} href={"/"}>
              email aqui
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.fFoter}>
        <Image
          className={styles.logoFooter}
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <div className={styles.linksSocial}>
          <Link className={`${styles.buttonFooter}`} href={"/"}>
            <RiDiscordLine className={styles.icon} />
          </Link>
          <Link className={`${styles.buttonFooter}`} href={"/"}>
            <FaInstagram className={styles.icon} />
          </Link>
          <Link className={`${styles.buttonFooter}`} href={"/"}>
            <FaLinkedinIn className={styles.icon} />
          </Link>
          <Link className={`${styles.buttonFooter}`} href={"/"}>
            <FaSquareYoutube className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
