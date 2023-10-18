import styled from "styled-components";
import { StyledSection } from "../../UI/utils/Section";
import { StyledContainer } from "../../UI/utils/utils";
import Title from "../../components/Title/Title";
import {
  darkColor,
  mdFont,
  normalFont,
  veryDarkColor,
} from "../../UI/variables";
import dev from "../../assets/dev.jpg";
import { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

const StyledName = styled.h2`
  color: ${darkColor};
  font-weight: 800;
  margin-top: 2rem;
  font-size: ${mdFont};
`;

const StyledText = styled.p`
  font-size: ${normalFont};
  text-align: start;
  margin-top: 1rem;
  line-height: 20px;
  color: ${veryDarkColor};
`;

const StyledContainerAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  gap: 32px;
  div {
    width: 50%;
  }
  
  p{
    color: ${darkColor};
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    div {
      width: 100%;
    }
  }
`;

const StyledContainerImg = styled.figure`
  img {
    width: 500px;
    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }
`;

const StyledList = styled.ul`
  color: ${darkColor};
  li {
    list-style: disc;
    list-style-position: inside;
  }
`;

const AboutMe = () => {
  const elementRef = useRef(null)
  useEffect(() => {
    if (elementRef.current)
      scrollReveal().reveal(elementRef.current, {
        reset: true,
        delay: 100
      });
  })

  return (
    <StyledSection id="aboutme" dark>
      <StyledContainer ref={elementRef}>
        <Title text="Sobre mim" />
        <StyledContainerAbout>
          <div>
            <StyledName>Vinicius Webster Fernandes de Souza</StyledName>
            <StyledText>
              <p>
                Estudante de desenvolvimento front-end, desde janeiro de 2023,
                apaixonado por tecnologia e amante de design. Buscando primeira
                oportunidade como desenvolvedor front-end júnior onde possa crescer
                profissionalmente, aplicar os conhecimentos obtidos e
                desenvolver a carreira.
              </p>
              <br />
              <StyledList>
                Conhecimento em:
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>ReactJS</li>
                <li>ReactTS</li>
                <li>Styled Components</li>
                <li>PhotoShop</li>
              </StyledList>
              <br />
            </StyledText>
          </div>
          <StyledContainerImg>
            <img src={dev} alt="imagem dev" />
          </StyledContainerImg>
        </StyledContainerAbout>
      </StyledContainer>
    </StyledSection>
  );
};

export default AboutMe;
