import React from "react"
// import Top from '../components/top'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/pages.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
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
    <Layout page="Contact">
      {/* <Top title="Contact" /> */}
      <SEO title="Contact" />
      <div title="contact" className={styles.detail}>
        <div className={styles.links}>
          {info.map(info => (
            <div className={styles.link}>
              <a href={info.link}
                key={info.description}>
                <FontAwesomeIcon icon={info.icon} page={info.description} className={styles.icon} />
                <p>{info.description}</p>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.twitter}>
          <a class="twitter-timeline" data-chrome="transparent nofooter" data-height="700" data-theme="dark" href="https://twitter.com/ha_shii_?ref_src=twsrc%5Etfw">Tweets by ha_shii_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </Layout>
  )
}
export default Contact 