import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Service = styled.div`
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 1000px) {
    margin-top: 4rem;
  }
`

const BoxServices = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3rem 5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: auto;
  }
`

const Servies = () => {
  return (
    <>
      <h2 className="titleh2">Servicios</h2>
      <BoxServices>
        <Service>
          <StaticImage
            src="../images/programacion_ico.png"
            alt="programación web"
            quality={90}
            height={270}
            objectPosition="50% 50%"
            objectFit="contain"
          />
          <h3 className="titleh3">Programación Web Personalizada</h3>
          <p className="text1">
            Creación de páginas web sin necesidad de utilizar CMS para un óptimo
            funcionamiento y máxima personalización
          </p>
        </Service>
        <Service>
          <StaticImage
            src="../images/diseno_ico.png"
            alt="Diseño web"
            quality={90}
            height={270}
            objectPosition="50% 50%"
            objectFit="contain"
          />
          <h3 className="titleh3">Diseño y maquetación web</h3>
          <p className="text1">
            Creación de páginas web sin necesidad de utilizar CMS para un óptimo
            funcionamiento y máxima personalización
          </p>
        </Service>
        <Service>
          <StaticImage
            src="../images/seos.png"
            alt="programación web"
            height={270}
            objectPosition="50% 50%"
            objectFit="contain"
            quality={90}
          />
          <h3 className="titleh3">Optimización SEO</h3>
          <p className="text1">
            Creación de páginas web sin necesidad de utilizar CMS para un óptimo
            funcionamiento y máxima personalización
          </p>
        </Service>
      </BoxServices>
    </>
  )
}

export default Servies
