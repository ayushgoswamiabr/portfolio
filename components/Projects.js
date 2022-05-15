import React from "react";
import styles from "../styles/Projects.module.css";
import repsoft from "../images/projects/repsoft.jpg";
import not from "../images/projects/3not3.jpg";
import ecommerce from "../images/projects/ecommerce.jpg";
import digit from "../images/projects/digit.jpg";
import tasktracker from "../images/projects/tasktracker.jpg";
import shg from "../images/projects/shg.jpg";
const Projects = () => {
  return (
    <>
      <div className={styles.flex1}>
        <h1>Explore Some of My Works</h1>
      </div>
      <div className={styles.grid1}>
        <a href="http://repsoft.in" target="_blank" rel="noreferrer">
          <img src={repsoft.src} alt="repsoft" />
        </a>
        <a href="http://3not3.com" target="_blank" rel="noreferrer">
          <img src={not.src} alt="3not3" />
        </a>
        <a
          href="http://look-suit-karda.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ecommerce.src} alt="3not3" />
        </a>
        <a
          href="http://digit-prediction-app.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={digit.src} alt="3not3" />
        </a>
        <a
          href="https://task-tracker-app-mern.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tasktracker.src} alt="3not3" />
        </a>
        <a
          href="https://online-shg-item-procurement-system.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={shg.src} alt="3not3" />
        </a>
      </div>
    </>
  );
};

export default Projects;
