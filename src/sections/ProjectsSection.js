import React from "react"
import ChartContainer from '../components/ChartContainer';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import { useStaticQuery, Link, graphql } from "gatsby"
import WhiteBox from '../components/WhiteBox';
import styles from "../styles/section.module.scss"
import Image from '../components/image'
import Chart from '../components/chart/'

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
  query {
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
            category
            event
          }
        }
      }
    }
  }
`)

  return (
    <>
      {/* <ChartContainer>
        <Chart data={data} />
      </ChartContainer> */}
      <SectionContainer id="projects">
        <Link to="/projects/">
          <SectionHeader text="projects" />
          <div className={styles.link}>
            see more
          </div>
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
    </>
  );
};

export default ProjectsSection;