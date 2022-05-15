import React from "react";
import styles from "../styles/Home.module.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import css from "../images/skills/css.svg";
import html from "../images/skills/html.svg";
import firebase from "../images/skills/firee.png";
import javascript from "../images/skills/js.svg";
import react from "../images/skills/react.svg";
import reactnative from "../images/skills/react-native.svg";
import express from "../images/skills/express.svg";
import nodejs from "../images/skills/nodejs.svg";
import mongo from "../images/skills/mongoDB.svg";
import git from "../images/skills/git.svg";
import next from "../images/skills/next.png";
import next1 from "../images/skills/next1.png";
import Link from "next/dist/client/link";
const Homepage = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        height="100px"
        options={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: false,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className={styles.flex1}>
        <div>
          <h1>Ayush Goswami</h1>
          <h3>Welcome to my portfolio website!</h3>
          <p>
            I am a Final Year Chemical Engineering Undergraduate from National
            Institute of Technology Raipur
          </p>
          <a
            href="https://www.linkedin.com/in/ayushgoswamiabr/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Know More</button>
          </a>
        </div>
        <div></div>
      </div>
      <div className={styles.flex2}>
        <div>
          <h1>Technologies I have Worked With</h1>
        </div>
        <div>
          <div className={styles.glass}>
            <div className={styles.skill1}>
              <img src={css.src} alt="css" />
              <img src={html.src} alt="html" />
              <img src={firebase.src} alt="firebase" />
              <img src={javascript.src} alt="javascript" />
            </div>
            <div className={styles.skill1}>
              <img src={react.src} alt="react" />
              <img src={reactnative.src} alt="reactnative" />
              <img src={express.src} alt="express" />
              <img src={nodejs.src} alt="nodejs" />
            </div>
            <div className={styles.skill1}>
              <img src={mongo.src} alt="mongo" />
              <img className={styles.next} src={next.src} alt="next" />
              <img src={git.src} alt="git" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flex3}>
        <h4>Explore Some My Projects</h4>
        <Link href="/projects">
          <button>Click Here</button>
        </Link>
      </div>
      <div className={styles.flex4}>
        <h4>Connect With Me</h4>
        <Link href="/contact">
          <button>Click Here</button>
        </Link>
      </div>
      <div className={styles.flex5}>
        <h6>Website Made Using</h6>
        <img src={next1.src} alt="next" width={100} height={60} />
      </div>
    </div>
  );
};

export default Homepage;
