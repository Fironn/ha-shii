import React from "react"
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import styles from "../styles/section.module.scss"
import profileJpg from '../images/profile.png';
import iconAndroid from '../images/android.png';
import iconPython from '../images/python.png';
import iconApple from '../images/apple.png';
import iconArduino from '../images/arduino.png';
import iconC from '../images/c.png';
import iconCss3 from '../images/css3.png';
import iconFirebase from '../images/firebase.png';
import iconGatsby from '../images/gatsby.png';
import iconHtml5 from '../images/html5.png';
import iconIbeacon from '../images/ibeacon.png';
import iconJavascript from '../images/javascript.png';
import iconNodejs from '../images/nodejs.png';
import iconVscode from '../images/vscode.png';


const AboutSection = () => {
  return (
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
          <img className={styles.bigger} src={iconJavascript} alt="" width="100" height="auto" />
          <img className={styles.bigger} src={iconFirebase} alt="" width="100" height="auto" />
          <img className={styles.bigger} src={iconPython} alt="" width="100" height="auto" />
          <img className={styles.bigger} src={iconArduino} alt="" width="100" height="auto" />
          <img className={styles.bigger} src={iconHtml5} alt="" width="100" height="auto" />
          <img className={styles.bigger} src={iconCss3} alt="" width="100" height="auto" />
          <br />
          <img src={iconC} alt="" width="100" height="auto" />
          <img src={iconGatsby} alt="" width="100" height="auto" />
          <img src={iconIbeacon} alt="" width="100" height="auto" />
          <img src={iconNodejs} alt="" width="100" height="auto" />
          <img src={iconAndroid} alt="" width="100" height="auto" />
          <img src={iconVscode} alt="" width="100" height="auto" />
          <img src={iconApple} alt="" width="100" height="auto" />
        </ul>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;