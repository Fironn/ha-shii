// import PropTypes from 'prop-types';
import React from 'react';
// import SectionHeader from '../components/SectionHeader';
import styles from "../styles/section.module.scss"
// import SectionContainer from '../components/SectionContainer';
import githubJpg from '../images/github.png';
import facebookJpg from '../images/facebook.png';
import emailJpg from '../images/email.png';

const FooterSection = () => {

  const info = [
    {
      title: 'github',
      icon: githubJpg,
      description: 'github',
      link: 'https://github.com/Fironn',
    },
    {
      title: 'facebook',
      icon: facebookJpg,
      description: 'facebook',
      link: 'https://www.facebook.com/shihomi.hashimoto.35',
    },
    {
      title: 'mail',
      icon: emailJpg,
      description: 'shihomihashi@gmail.com',
      link: 'mailto:shihomihashi@gmail.com',
    },
    // {
    //   icon: ['fab', 'twitter-square'],
    //   description: 'twitter',
    //   link: 'https://twitter.com/ha_shii_',
    // },
  ];

  return (
    <section id="contact" className={styles.container + " " + styles.bottom}>
      {/* <SectionContainer id="contact"> */}
      {/* <SectionHeader text="contact" /> */}
      <div className={styles.contactLinks} page="contact">
        {info.map((info, index) => (
          <div className={styles.contactLink} key={index}>
            <a href={info.link} key={info.description}>
              <img src={info.icon} className={styles.icon} page={info.description} height="40px" alt="" />
              {/* <p>{info.description}</p> */}
            </a>
          </div>
        ))}
      </div>
      <div className={styles.contactBackground}></div>
      {/* </SectionContainer> */}
    </section >
  );
};

export default FooterSection;