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
    <Layout page={`${title} Page`}>
      <SEO title={`${title} Page`} />
      <div className={styles.container}>
        <h1 className={styles.title}>{`${title} Page`}</h1>
        <div className={styles.date}>date : {date}</div>
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
    }
  }
`