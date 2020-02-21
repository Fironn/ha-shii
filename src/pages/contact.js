import React from "react"
import Top from '../components/top'
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
    <Layout page="Contact">
      <Top title="Contact" />
      <SEO title="Contact" />
      <div title="contact" className={styles.detail}>
        <div className={styles.links}>
          {info.map(info => (
            <div className={styles.link}>
              <a href={info.link}
                key={info.description}>
                <FontAwesomeIcon icon={info.icon} className={styles.icon} />
                <p>{info.description}</p>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.twitter}>
          <a class="twitter-timeline" data-chrome="transparent nofooter" data-height="600" data-theme="dark" href="https://twitter.com/firon_?ref_src=twsrc%5Etfw">Tweets by firon_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </Layout>
  )
}
export default Contact