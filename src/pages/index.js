import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout/"
import SEO from "../components/seo"
import SectionContainer from '../components/SectionContainer';

// import TopSection from '../sections/TopSection';
import AboutSection from '../sections/AboutSection';
import BlogsSection from '../sections/BlogsSection';
import ProjectsSection from '../sections/ProjectsSection';
import FooterSection from '../sections/FooterSection';

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Home" />
    {/* <TopSection /> */}
    <AboutSection />
    <ProjectsSection />
    <BlogsSection />
    <FooterSection />
  </Layout>
)

export default IndexPage
