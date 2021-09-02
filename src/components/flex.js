import React from "react"
import styled from "styled-components"

const FlexDiv = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 5rem;
  width: ${props => (props.width ??= "100%")};

  @media (max-width: 1000px) {
    flex-direction: ${props => (props.reverse ??= "column")};
  }
`

const Flex = ({ children, width, reverse }) => {
  return (
    <FlexDiv width={width} reverse={reverse}>
      {children}
    </FlexDiv>
  )
}

export default Flex
