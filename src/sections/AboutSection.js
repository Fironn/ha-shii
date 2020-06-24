import React from "react"
import Skill from '../components/Skills';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import styles from "../styles/section.module.scss"
import profileJpg from '../images/profile.png';
import locationJpg from '../images/location.png';

const AboutSection = () => {

  const Skills = {
    Frontend: {
      'JavaScript': 2,
      'HTML5/CSS3': 3,
      'Gatsby': 2,
      'Android': 1,
    },
    Backend: {
      'Firebase': 3,
      'Node.js': 2,
      'Python': 2,
    },
    Others: {
      'Arduino': 3,
      'iBeacon': 2,
    },
  };

  return (
    // <section id="about" className={styles.container}>
    <SectionContainer id="about">
      <SectionHeader text="about" />
      <div className={styles.location}>
        <img src={locationJpg} className={styles.icon} height="18px" width="20px" alt="" />
        <p>Aizu, Fukushima</p>
      </div >
      <div className={styles.profile}>
        <div className={styles.profileDetails}>
          <img src={profileJpg} className={styles.icon} height="120px" alt="" />
          <p className={styles.profileName}>はっしー</p>
          <hr />
          <p className={styles.profileMain}>
            某大学コンピュータ理工学部2年。趣味は電子工作、特技はおりがみ。
            大学入学からプログラミングを始め、複数のプロコン/ハッカソンに参加。
            主にWebアプリとIoTデバイス関連を開発。「IT×健康×音楽」をテーマに活動している
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <h4>Frontend</h4>
          <hr />
          <div>
            {Object.keys(Skills.Frontend).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={Skills.Frontend[skill]}
                key={skill}
              />
            ))}
          </div>
        </div>
        <div className={styles.skill}>
          <h4>Backend</h4>
          <hr />
          <div>
            {Object.keys(Skills.Backend).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={Skills.Backend[skill]}
                key={skill}
              />
            ))}
          </div>
        </div>
        <div className={styles.skill}>
          <h4>Others</h4>
          <hr />
          <div>
            {Object.keys(Skills.Others).map(skill => (
              <Skill
                skillName={skill}
                skillLevel={Skills.Others[skill]}
                key={skill}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer >
  );
};

export default AboutSection;