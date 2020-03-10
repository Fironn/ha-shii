import React from "react"
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import { useStaticQuery, Link, graphql } from "gatsby"
import WhiteBox from '../components/WhiteBox';
import styles from "../styles/section.module.scss"


const BlogsSection = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark (filter: {frontmatter: {path: {regex: "/blogs/"}}}){
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date
              thumbnail
              path
              main
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <SectionContainer id="blogs">
      <SectionHeader text="blogs" />
      <Link to="/blogs/" className={styles.link}>
        see more
      </Link>
      <div className={styles.lists}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.main === 1) return (
            <div key={node.id}>
              <Link to={"/" + node.frontmatter.path + "/"}>
                <WhiteBox>
                  <div className={styles.list}>
                    <h3>
                      {node.frontmatter.title}
                    </h3>
                    <p className={styles.date}>{node.frontmatter.date}</p>
                    <p className={styles.small}>{node.excerpt}</p>
                  </div>
                </WhiteBox>
              </Link>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default BlogsSection;