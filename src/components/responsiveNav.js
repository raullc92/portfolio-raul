import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import styled from "styled-components"
import { Link } from "gatsby"

const Bar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`

const BurguerButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border: none;
  background-color: var(--yellowjs);
  cursor: pointer;
`

const NavText = styled.div`
  height: 100vh;
  background-color: var(--yellowjs);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  position: absolute;
  top: 6rem;
  z-index: 9999;
`

const ResLink = styled(Link)`
  color: var(--title1);
  text-transform: uppercase;
  margin: 1rem 0;
  padding: 1.5rem 0;
  font-family: "Rubik";
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 1.3rem;
  text-align: center;
  width: 100%;
`

const ResponsiveNav = ({ handleClick, open }) => {
  return (
    <>
      <Bar>
        <BurguerButton onClick={handleClick}>
          <GiHamburgerMenu size={36} />
        </BurguerButton>

        {open ? (
          <NavText>
            <ResLink to="/">SOBRE MÍ</ResLink>
            <ResLink to="/">PROYECTOS</ResLink>
          </NavText>
        ) : null}
      </Bar>
    </>
  )
}

export default ResponsiveNav
