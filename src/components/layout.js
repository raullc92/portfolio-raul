import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import "@fontsource/rubik/400.css"
import "@fontsource/rubik/300.css"
import "@fontsource/rubik/700.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
