import React from "react"
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import styles from "../styles/section.module.scss"
import profileJpg from '../images/profile.png';
import iconAndroid from '../images/android.png';
import iconPython from '../images/python.png';
import iconArduino from '../images/arduino.png';
import iconC from '../images/c.png';
import iconCss3 from '../images/css3.png';
import iconFirebase from '../images/firebase.png';
import iconGatsby from '../images/gatsby.png';
import iconHtml5 from '../images/html5.png';
import iconIbeacon from '../images/ibeacon.png';
import iconJavascript from '../images/javascript.png';
import iconNodejs from '../images/nodejs.png';


const AboutSection = () => {
  const Skills = [
    {
      skill: 'JavaScript',
      src: iconJavascript,
      class: styles.bigger,
      level: 2,
    },
    {
      skill: 'iBeacon',
      src: iconIbeacon,
      class: styles.bigger,
      level: 2,
    },
    {
      skill: 'Html5',
      src: iconHtml5,
      class: styles.bigger,
      level: 2,
    },
    {
      skill: 'Gatsby',
      src: iconGatsby,
      class: styles.bigger,
      level: 2,
    },
    {
      skill: 'Node.js',
      src: iconNodejs,
      class: styles.bigger,
      level: 2,
    },
    {
      skill: 'Firebase',
      src: iconFirebase,
      // class: styles.bigger,
      level: 2,
    },
    {
      skill: 'JavaScript',
      src: iconCss3,
      // class: styles.bigger,
      level: 2,
    },
    {
      skill: 'C',
      src: iconC,
      // class: styles.bigger,
      level: 2,
    },
    {
      skill: 'Arduino',
      src: iconArduino,
      // class: styles.bigger,
      level: 2,
    },
    {
      skill: 'Python',
      src: iconPython,
      // class: styles.bigger,
      level: 2,
    },
    {
      skill: 'Android',
      src: iconAndroid,
      // class: styles.bigger,
      level: 2,
    },
  ];

  const SkillsLiTag = Skills.map((item) => {
    return (
      <li>
        <img className={item.class} src={item.src} alt="" width="100" height="auto" />
        <span>{item.level}</span>
      </li>
    );
  });

  return (
    // <section id="about" className={styles.container}>
    <SectionContainer id="about">
      <SectionHeader text="about" />
      <div className={styles.profile}>
        <img src={profileJpg} className={styles.icon} alt="" />
        <p className={styles.profileDetails}>
          {/* UoA26期。趣味は電子工作、特技はおりがみ。大学入学からプログラミングを始め、複数のプロコン/
          ハッカソンに参加。WebアプリとIoTデバイス関連を中心に開発。テーマとして「IT×健康
          ×音楽」を掛け合わせるのが好き。現在デザインについて勉強中 */}
          いろいろなプロフィール
        </p>
      </div>
      <div className={styles.skills}>
        <ul>
          {SkillsLiTag}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;