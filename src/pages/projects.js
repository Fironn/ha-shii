import React from "react"
import { graphql, Link } from "gatsby"
// import Top from '../components/top'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/pages.module.scss'
import Chart from '../components/chart/'
import Image from '../components/image'

const Projects = ({ data }) => {
  return (
    <Layout page="projects">
      {/* <Top title="Projects" /> */}
      <SEO title="Projects" />
      {/* <Chart className={styles.chart} data={data} /> */}
      <div className={styles.detail} title="projects">
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <div className={styles.lists} page="projects">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <div key={node.id}>
                <Link to={"/" + node.frontmatter.path + "/"}>
                  <div className={styles.list}>
                    <div className={styles.imgOut}>
                      <Image className={styles.img} filename={node.frontmatter.thumbnail} />
                    </div>
                    <div className={styles.listDetail}>
                      <h3>
                        {node.frontmatter.title}
                      </h3>
                      <hr />
                      <p className={styles.date}>{node.frontmatter.date}</p>
                      <p className={styles.small}>{node.frontmatter.overview}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Projects

export const query = graphql`
  query {
    allMarkdownRemark (filter: {frontmatter: {path: {regex: "/projects/"}}}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
            category
            event
            thumbnail
            overview
          }
        }
      }
    }
  }
`