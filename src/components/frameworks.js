import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Flex from "./flex"

const Container = styled.section`
  background-color: var(--yellowjs);
  padding: 5rem 0;
`

const FlexContent = styled.div`
  width: 100%;
  margin: auto;
`

const Frameworks = () => {
  return (
    <Container>
      <Flex width="75%" reverse="column-reverse">
        <FlexContent>
          <h3 className="titleh3">Frameworks y librerías</h3>
          <p className="text1">
            Una vez asentadas las bases de la programación web era el momento de
            elegir una librería, la elegida fue React. Esta librería permitía
            optimizar gran parte del trabajo y facilita todo el proceso de
            desarrollo.
          </p>
          <h3 className="titleh3">POR QUÉ REACT?</h3>
          <p className="text1">
            El primer motivo fue que la gran mayoría de ofertas laborales en el
            sector de la programación web se el analizador de descargas de
            paquetes npmtrends.com, la librería de React se descarga de media 8
            veces más que Vue y 20 veces más que Angular.
          </p>
        </FlexContent>
        <FlexContent
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StaticImage
            src="../images/react_logo_w.png"
            alt="React Logo"
            width={300}
          />
        </FlexContent>
      </Flex>
      <Flex width="75%">
        <FlexContent
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StaticImage
            src="../images/gatsby_logo_w.png"
            alt="Gatsby Logo"
            width={400}
          />
        </FlexContent>
        <FlexContent>
          <h3 className="titleh3">UDEMY</h3>
          <p className="text1">
            Gracias al curso de React de Juan Pablo De la torre Valdez de 44,5
            horas descubrí que React se descompone en más librerías, como NextJS
            y Gatsby. Esta última me resultó muy interesante ya que permite
            realizar SPA de una manera rápida y a la misma vez optimizada tanto
            en velocidad de carga como en SEO. Por esa razón, actualmente
            utilizo Gatsby para los proyectos que realizo ya que se adapta
            perfectamente a mis necesidades.
          </p>
        </FlexContent>
      </Flex>
    </Container>
  )
}

export default Frameworks
