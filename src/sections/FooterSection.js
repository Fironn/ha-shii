// import PropTypes from 'prop-types';
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import styles from "../styles/section.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

const FooterSection = () => {
  library.add(fab);
  library.add(fas);

  const info = [
    {
      icon: ['fas', 'envelope'],
      description: 'shihomihashi@gmail.com',
      link: 'mailto:shihomihashi@gmail.com',
    },
    {
      icon: ['fab', 'github-square'],
      description: 'github.com/Fironn',
      link: 'https://github.com/Fironn',
    },
    {
      icon: ['fab', 'facebook-square'],
      description: 'facebook.com/shihomi.hashimoto.35',
      link: 'https://www.facebook.com/shihomi.hashimoto.35',
    },
    {
      icon: ['fab', 'twitter-square'],
      description: 'twitter.com/firon_',
      link: 'https://twitter.com/firon_',
    },
  ];

  return (
    <section id="contact" className={styles.container + " " + styles.bottom}>
      <SectionHeader text="contact" />
      <div className={styles.container + " " + styles.bottom}>
        <div className={styles.contactLinks}>
          {info.map(info => (
            <div className={styles.contactLink} >
              <a href={info.link}
                key={info.description}>
                <FontAwesomeIcon icon={info.icon} className={styles.icon} />
                <p>{info.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterSection;