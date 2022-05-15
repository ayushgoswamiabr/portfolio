import React from "react";
import styles from "../styles/Contact.module.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
  return (
    <div className={styles.flex1}>
      <div>
        <h1>Discuss any Project Ideas With Me</h1>
        <div className={styles.socialflex}>
          <a
            href="mailto:ayushgoswami.abr@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineMail />
          </a>
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
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
