import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../assets/logo_svg.svg"
import Nav from "../components/nav"
import ResponsiveNav from "./responsiveNav"
import { useState } from "react"

const MainBar = styled.header`
  width: 100%;
  height: 6rem;
  background-color: var(--yellowjs);
  margin: 0;
  padding: 0;
  display: flex;
`

const LogoLink = styled(Link)`
  display: flex;
  margin: 1.5rem 0 1.5rem 3rem;
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
    console.log(open)
  }

  return (
    <>
      <MainBar>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <Nav />
        <ResponsiveNav handleClick={handleClick} open={open} />
      </MainBar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
