import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import "@fontsource/rubik/400.css"
import "@fontsource/rubik/300.css"
import "@fontsource/rubik/700.css"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { title } from "./blogcss.module.css"
import WrapRootElement from "./wrapRootElement"

const shortcodes = { title }

const Blog = styled.main`
  background-color: var(--yellowjs);
`

const ContainerBlog = styled.section`
  max-width: 1200px;
  margin: auto;
  background-color: #fff;
  padding: 1rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Blog>
        <ContainerBlog>
          <WrapRootElement>{children}</WrapRootElement>
        </ContainerBlog>
      </Blog>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
