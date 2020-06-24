import React from "react"
// import Top from '../components/top'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/pages.module.scss'
import githubJpg from '../images/github.png';
import facebookJpg from '../images/facebook.png';
import emailJpg from '../images/email.png';

const Contact = () => {

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
    <Layout page="Contact">
      {/* <Top title="Contact" /> */}
      <SEO title="Contact" />
      <div title="contact" className={styles.detail}>
        <div className={styles.links}>
          {info.map(info => (
            <div className={styles.link}>
              <a href={info.link}
                key={info.description}>
                <img src={info.icon} className={styles.icon} page={info.description} height="40px" alt="" />
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