import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Flex from "./flex"

const FlexContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 100%;
`

const About = () => {
  return (
    <>
      <h2 className="titleh2">Sobre mí</h2>
      <Flex width="75%">
        <FlexContent>
          <StaticImage
            src="../images/raul.png"
            alt="Raul Lopez Cruz"
            width={400}
            quality={75}
          />
        </FlexContent>
        <FlexContent
          style={{
            alignItems: "flex-start",
          }}
        >
          <h2 className="titleh3">¡Hola!</h2>
          <h3 className="titleh3">Soy Raúl López,</h3>
          <h4 className="text1">
            Ingeniero informático por la Universitat Oberta de Catalunya
            especializado en el desarrollo web
          </h4>
        </FlexContent>
      </Flex>
      <Flex width="75%" reverse="column-reverse">
        <FlexContent
          style={{
            alignItems: "flex-start",
          }}
        >
          <h3 className="titleh3">Estudios</h3>
          <p className="text1">
            Una vez finalizado el <b>Bachillerato Tecnológico</b>, no sabía que
            estudiar y decidí realizar un <b>CFS de Automoción</b>. La profesión
            no era lo esperado y decidí probar en un campo que me llamaba mucho
            la atención, la informática. Me matriculé en{" "}
            <b>Ingeniería Informática</b> en la{" "}
            <b>Universitat Oberta de Catalunya (UOC)</b> y descubrí mi vocación.
          </p>
        </FlexContent>
        <FlexContent>
          <StaticImage
            src="../images/monlau_logo.png"
            alt="Logo Monlau"
            width={300}
          />
          <br />
          <StaticImage
            src="../images/logo_uoc2.png"
            alt="Logo UOC"
            width={300}
          />
        </FlexContent>
      </Flex>
      <Flex width="75%">
        <FlexContent>
          <StaticImage
            src="../images/trilenguaje.png"
            alt="Javascript, html y CSS"
            width={300}
          />
        </FlexContent>
        <FlexContent
          style={{
            alignItems: "flex-start",
          }}
        >
          <h3 className="titleh3">Inicios</h3>
          <p className="text1">
            Durante la carrera estuve en contacto con lenguajes como{" "}
            <b>C, Java, Phyton</b>... Pero me empecé a interesar por el
            desarrollo web, así es como por mi cuenta aprendí los conceptos de
            <b>HTML y CSS</b>. Con éstos fuí capaz de diseñar mis primeras
            páginas web pero rápidamente me di cuenta que necesitaba poder
            interactuar entre todos los elementos, de esta manera descubrí el
            lenguaje de programación que más me apasiona, <b>Javascript!</b>
          </p>
        </FlexContent>
      </Flex>
    </>
  )
}

export default About
