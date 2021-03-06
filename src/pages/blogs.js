import React from 'react'
import { graphql, Link } from "gatsby"
// import Top from '../components/top'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../styles/pages.module.scss'

const Blogs = ({ data }) => {
  return (
    <Layout page="blogs">
      {/* <Top title="Blogs" /> */}
      <SEO title="Blogs" />
      <div className={styles.detail} title="blogs">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className={styles.lists} page="blogs">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <Link to={"/" + node.frontmatter.path + "/"}>
                  <div className={styles.list}>
                    <h3>
                      {node.frontmatter.title}
                    </h3>
                    <hr />
                    <p className={styles.date}>{node.frontmatter.date}</p>
                    <p className={styles.small}>{node.excerpt}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <div className={styles.twitter}>
          <a class="twitter-timeline" data-chrome="transparent nofooter" data-height="500" data-theme="dark" href="https://twitter.com/firon_?ref_src=twsrc%5Etfw">Tweets by firon_</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div> */}
      </div>
    </Layout>
  )
}

export default Blogs;

export const query = graphql`
  query {
    allMarkdownRemark (filter: {frontmatter: {path: {regex: "/blogs/"}}}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
          excerpt
        }
      }
    }
  }
`