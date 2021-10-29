import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import { useStaticQuery, Link, graphql } from "gatsby"
import WhiteBox from '../components/WhiteBox';
import styles from "../styles/section.module.scss"


const BlogsSection = () => {
  const data = useStaticQuery(graphql`
    query  {
      allMarkdownRemark (filter: {frontmatter: {path: {regex: "/blogs/"}}}){
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date
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
      <Link to="/blogs/">
        <SectionHeader text="blogs" />
        <div className={styles.link}>
          see more
        </div>
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
                    <hr />
                    <p className={styles.date}>{node.frontmatter.date}</p>
                    <p className={styles.small}>{node.excerpt}</p>
                  </div>
                </WhiteBox>
              </Link>
            </div>
          );
          else return;
        })}
      </div>
    </SectionContainer>
  );
};

export default BlogsSection;