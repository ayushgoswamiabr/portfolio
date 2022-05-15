import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={show ? styles.menu : styles.hiddenmenu}>
        <ul>
          <li onClick={() => setShow(!show)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setShow(!show)}>
            <Link href="/projects">Projects</Link>
          </li>
          <li onClick={() => setShow(!show)}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarstart}>
        <h4>
          <Link href="/">Ayush</Link>
        </h4>
      </div>
      <div className={styles.navbarmiddle}>
        <ul>
          <li className={`${styles.navlink} ${styles.navlinkeffect}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${styles.navlink} ${styles.navlinkeffect}`}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={`${styles.navlink} ${styles.navlinkeffect}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navbarend}>
        <a
          href="https://github.com/ayushgoswamiabr"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.instagram.com/ayush_goswami_/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ayushgoswamiabr/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        {show ? (
          <CgClose
            className={styles.hamburger}
            onClick={() => setShow(!show)}
          />
        ) : (
          <GiHamburgerMenu
            className={styles.hamburger}
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
