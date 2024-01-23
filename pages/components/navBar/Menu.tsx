import React, { useState } from "react";
import styles from "./Menu.module.css";
import { BiArrowToBottom, BiBook, BiBuildingHouse } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const [isDropCursodownOpen, setIsDropCursodownOpen] = useState(false);
  const [isConteudoDropdownOpen, setIsConteudoDropdownOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const handleCursoClick = () => {
    setIsDropCursodownOpen(!isDropCursodownOpen);
    setIsConteudoDropdownOpen(false);
  };

  const handleConteudoClick = () => {
    setIsConteudoDropdownOpen(!isConteudoDropdownOpen);
    setIsDropCursodownOpen(false);
  };

  const handleMenuMouseEnter = () => {
    setIsMenuHovered(true);
  };

  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false);
    setIsDropCursodownOpen(false);
    setIsConteudoDropdownOpen(false);
  };

  const handleSubMenuMouseEnter = () => {
    setIsMenuHovered(true);
  };

  const handleSubMenuMouseLeave = () => {
    if (!isMenuHovered) {
      setIsDropCursodownOpen(false);
      setIsConteudoDropdownOpen(false);
    }
  };

  return (
    <nav
      className={styles.nav}
      onMouseEnter={handleMenuMouseEnter}
      onMouseLeave={handleMenuMouseLeave}
    >
      <ul className={styles.container}>
        <Image src={"/logo.png"} alt="logo" width={100} height={80} />
        <div className={styles.listItem}>
          <div>
            <li>
              <span
                className={styles.menuItem}
                onClick={handleCursoClick}
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
              >
                Cursos
                <BiArrowToBottom />
              </span>
            </li>
            {isMenuHovered && isDropCursodownOpen && (
              <div
                className={styles.subMenu}
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
              >
                <li className={styles.subMenuItem} onClick={handleCursoClick}>
                  <Link
                    className={styles.subMenuItemLink}
                    href={`${process.env.FRONT}`}
                    target="_blank"
                  >
                    <Image
                      className={styles.subImg}
                      src={"/icon/java.0622728f.svg"}
                      alt="Java"
                      width={60}
                      height={60}
                    />
                    Curso de Java
                  </Link>
                </li>
                <li className={styles.subMenuItem} onClick={handleCursoClick}>
                  <Link
                    className={styles.subMenuItemLink}
                    href={`${process.env.FRONT}`}
                    target="_blank"
                  >
                    <Image
                      className={styles.subImg}
                      src={"/icon/fullstack.efc91411.svg"}
                      alt="Fullstack"
                      width={60}
                      height={60}
                    />
                    Curso de FullStack
                  </Link>
                </li>
                <li className={styles.subMenuItem} onClick={handleCursoClick}>
                  <Link
                    className={styles.subMenuItemLink}
                    href={`${process.env.FRONT}`}
                    target="_blank"
                  >
                    <Image
                      className={styles.subImg}
                      src={"/icon/react.b3c5f2f6.svg"}
                      alt="Java"
                      width={60}
                      height={60}
                    />
                    Curso de React
                  </Link>
                </li>

                <li className={styles.subMenuItem} onClick={handleCursoClick}>
                  <Link
                    className={styles.subMenuItemLink}
                    href={`${process.env.FRONT}`}
                    target="_blank"
                  >
                    <Image
                      className={styles.subImg}
                      src={"/icon/node.6b4335f1.svg"}
                      alt="Java"
                      width={60}
                      height={60}
                    />
                    Curso de NodeJs
                  </Link>
                </li>
              </div>
            )}
          </div>
          <li>
            <span
              className={styles.menuItem}
              onClick={handleConteudoClick}
              onMouseEnter={handleSubMenuMouseEnter}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              Conteudo Gratuito
              <BiArrowToBottom />
            </span>
          </li>
          {isMenuHovered && isConteudoDropdownOpen && (
            <div
              className={styles.subMenu}
              onMouseEnter={handleSubMenuMouseEnter}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <li className={styles.subMenuItem} onClick={handleCursoClick}>
                <Link
                  className={styles.subMenuItemLink}
                  href={`${process.env.FRONT}`}
                  target="_blank"
                >
                  <Image
                    className={styles.subImg}
                    src={"/icon/javascript.jpg"}
                    alt="Java"
                    width={50}
                    height={50}
                  />
                  Curso de Javascript
                </Link>
              </li>

              <li className={styles.subMenuItem} onClick={handleCursoClick}>
                <Link
                  className={styles.subMenuItemLink}
                  href={`${process.env.FRONT}`}
                  target="_blank"
                >
                  <Image
                    className={styles.subImg}
                    src={"/icon/typescript.jpg"}
                    alt="Java"
                    width={50}
                    height={50}
                  />
                  Curso de Typescript
                </Link>
              </li>
            </div>
          )}

          <li className={styles.menuItem}>
            Depoimentos
            <BiBook />
          </li>
          <li className={styles.menuItem}>
            Alunos <BiBuildingHouse />
          </li>
        </div>
        <div>
          <li>
            <Link
              target="_blank"
              className={styles.memberArea}
              href={`${process.env.FRONT}`}
            >
              <CiUser />
              <span>Login</span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
