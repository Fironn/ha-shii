import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from "../components/seo"
import styles from "./blog-template.module.scss";

const BlogTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        date
      }
    }
  } = data
  return (
    <Layout page={`${title}`}>
      <SEO title={`${title}`} />
      <div className={styles.container}>
        <h1 className={styles.title}>{`${title}`}</h1>
        <div className={styles.date}>date : {date}</div>
        <hr />
        <div className={styles.detail} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`