import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/banner"
import Services from "../components/services"
import About from "../components/about"
import Frameworks from "../components/frameworks"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="" />
    <Banner />
    <Services />
    <About />
    <Frameworks />
    <Contact />
  </Layout>
)

export default IndexPage
