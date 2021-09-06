import React from "react"
import { MDXProvider } from "@mdx-js/react"

const MyH1 = props => (
  <h1
    style={{
      fontSize: "4rem",
      fontFamily: "Rubik, sans-serif",
      textAlign: "center",
    }}
    {...props}
  />
)
const MyParagraph = props => (
  <p
    style={{
      fontSize: "1.2rem",
      lineHeight: 1.4,
      fontFamily: "Rubik, sans-serif",
    }}
    {...props}
  />
)
const MyH2 = props => (
  <h2
    style={{ fontSize: "2rem", fontFamily: "Rubik, sans-serif" }}
    {...props}
  />
)

const components = {
  h1: MyH1,
  h2: MyH2,
  p: MyParagraph,
}

const WrapRootElement = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default WrapRootElement
