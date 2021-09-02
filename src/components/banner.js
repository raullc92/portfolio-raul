import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  display: flex;
  background-color: var(--yellowjs);
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const BannerText = styled.div`
  color: var(--secondary);
  width: 50%;
  display: flex;
  align-content: center;
  flex-direction: column;
  margin-left: 4rem;
`

const Title = styled.h1`
  color: var(--secondary);
  font-family: var(--font1);
  font-weight: bold;
  font-size: 4rem;
  margin: 0;
`
const Subtitle = styled.h2`
  color: var(--secondary);
  font-family: var(--font1);
  font-weight: 400;
  margin: 0;
  font-size: 3rem;
`

const Properties = styled.pre`
  color: var(--secondary);
  font-family: var(--font1);
  font-size: 1.5rem;
  font-weight: 200;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`

const ImageBanner = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 6rem;
  }
`

const Banner = () => {
  return (
    <Container>
      <ImageBanner>
        <StaticImage
          src="../images/diseno_ico.png"
          alt="programación web"
          objectFit="contain"
          loading="lazy"
          quality={75}
        />
      </ImageBanner>

      <BannerText>
        <Title>Raúl López,</Title>
        <Subtitle>Desarrollador Web</Subtitle>
        <Properties>{`
                    {
                          Javascript,
                          HTML,
                          CSS,
                          Git,
                          React
                      }`}</Properties>
      </BannerText>
    </Container>
  )
}

export default Banner
