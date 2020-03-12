import React from "react"
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import { useStaticQuery, Link, graphql } from "gatsby"
import WhiteBox from '../components/WhiteBox';
import styles from "../styles/section.module.scss"
import Image from '../components/image'

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
  query myQueryAndMyQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {regex: "/projects/"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            thumbnail
            path
            overview
            main
          }
        }
      }
    }
  }
`)

  return (
    <SectionContainer id="projects">
      <SectionHeader text="projects" />
      <Link to="/projects/" className={styles.link}>
        see more
      </Link>
      <div className={styles.lists} page="projects">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.main === 1) return (
            <div key={node.id}>
              <Link to={"/" + node.frontmatter.path + "/"}>
                <WhiteBox>
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
                </WhiteBox>
              </Link>
            </div>
          );
          else return null;
        })}
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;