import styled from "styled-components";
import { StyledSection } from "../../UI/utils/Section";
import avatar from "../../assets/avatar-code.png";
import { StyledContainer } from "../../UI/utils/utils";
import { darkColor, firstNameColor, secondNameColor, veryDarkColor } from "../../UI/variables";
import { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

const StyledLandingPage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 82px);
  box-sizing: border-box;
  
  padding: 6rem 0;
  flex-wrap: wrap;
  img{ 
    @media screen and (max-width: 500px){
    width: 100%;
  }
  }
`;

const StyledDivName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 4rem;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 500px){
    width: 100%;
  }
`

const StyledName = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  line-height: 60px;
  color: ${firstNameColor};

  span {
    display: block;
    color: ${secondNameColor};
  }

  @media screen and (max-width: 500px){
    font-size: 4rem;
  }
`

const StyledSubtitle = styled.p`
  text-decoration: underline;
  color: ${veryDarkColor};
  font-size: 20px;
  line-height: 30px;
  width: 80%;

  @media screen and (max-width: 500px){
    width: 100%;
    text-align: center;
  }
`

const StyledButton = styled.a`
  padding: 1rem 2rem;
  background-color: ${darkColor};
  color: white;
  text-decoration: underline;
  border-radius: 30px;
  cursor: pointer;
   
  &:hover {
    background-color: #897563;
    transition: .4s;
  }
`

const LandingPage = () => {

  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current)
      scrollReveal().reveal(elementRef.current, {
        reset: true,
        delay: 200
      });
  }, [])

  return (
    <StyledSection>
      <StyledContainer>
        <StyledLandingPage ref={elementRef}>
            <img src={avatar} alt="ilustração pessoa codando" />
          <StyledDivName>
            <StyledName>
              Vinicius
              <span>Webster</span>
            </StyledName>
            <StyledSubtitle>
              Desenvolvedor Front-End, HTML, CSS, JavaScript e TypeScript.
              ReactJs e ReactTs
            </StyledSubtitle>
            <StyledButton href="https://www.linkedin.com/in/viniwebster/" target="_blank">
              Entre em Contato
            </StyledButton>
          </StyledDivName>
        </StyledLandingPage>
      </StyledContainer>
    </StyledSection>
  );
};

export default LandingPage;
