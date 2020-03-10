// import PropTypes from 'prop-types';
import React from 'react';
// import SectionHeader from '../components/SectionHeader';
import styles from "../styles/section.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import SectionContainer from '../components/SectionContainer';

const FooterSection = () => {
  library.add(fab);
  library.add(fas);

  const info = [
    {
      title: 'github',
      icon: ['fab', 'github-square'],
      description: 'github',
      link: 'https://github.com/Fironn',
    },
    {
      title: 'facebook',
      icon: ['fab', 'facebook-square'],
      description: 'facebook',
      link: 'https://www.facebook.com/shihomi.hashimoto.35',
    },
    {
      title: 'mail',
      icon: ['fas', 'envelope'],
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
        {info.map(info => (
          <div className={styles.contactLink} >
            <a href={info.link}
              key={info.description}>
              <FontAwesomeIcon icon={info.icon} page={info.description} className={styles.icon} />
              {/* <p>{info.description}</p> */}
            </a>
          </div>
        ))}
      </div>
      <div className={styles.contactBackground}></div>
      {/* </SectionContainer> */}
    </section>
  );
};

export default FooterSection;