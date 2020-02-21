import React from 'react';
import { Link as LinkForScroll } from 'react-scroll';
import styles from "../styles/section.module.scss"

const TopSection = () => {

  return (
    <section id="home" className={styles.container + " " + styles.top}>
      <div>
        はっしー's スタジオ
      </div>
      <LinkForScroll
        to="about"
        smooth
        duration={300}
        offset={0}
      >↓
      </LinkForScroll>
    </section>
  );
};

export default TopSection;