import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${props => (props.open ? "flex" : "none")};
  }
`

const NavLink = styled(Link)`
  color: var(--title1);
  text-transform: uppercase;
  margin-right: 2rem;
  padding: 1rem;
  font-family: "Rubik";
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 1.3rem;
`

const Nav = () => {
  return (
    <Navbar>
      <NavLink to="/">SOBRE MÍ</NavLink>
      <NavLink to="/">PROYECTOS</NavLink>
      <NavLink to="/">CONTACTO</NavLink>
    </Navbar>
  )
}

export default Nav
