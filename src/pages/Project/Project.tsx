import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import styled from "styled-components";
import {
  bgFont,
  darkColor,
  lightColor,
  veryDarkColor,
} from "../../UI/variables";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const StyledProject = styled.main`
  min-height: calc(100vh - 163px);
  background-color: ${lightColor};
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

const StyledSectionImg = styled.figure`
  width: 80%;
  img {
    width: 100%;
    box-shadow: 10px 10px 30px -20px ${veryDarkColor};
    border: 5px solid white;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledSectionDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  h1 {
    font-size: ${bgFont};
    font-weight: 800;
    color: ${darkColor};
  }

  p {
    color: ${darkColor};
    line-height: 22px;
  }

  div {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
      flex-wrap: wrap;
      gap: 32px;
      justify-content: center;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    gap: 32px;
  }
`;

const StyledContainer = styled.section`
  margin: auto;
  max-width: 1400px;
  padding: 0 2rem;

  display: flex;
  gap: 32px;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-width: 150px;
  padding: 1rem 2rem;
  background-color: ${darkColor};
  color: white;
  text-decoration: underline;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #897563;
    transition: 0.4s;
  }
`;

const StyledContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Project = () => {
  const { id } = useParams();
  const project = data.find((item) => item.id === Number(id));

  if (!project) {
    return <h1> Prato não encontrado</h1>;
  }
  return (
    <StyledProject>
      <StyledContainer>
        <StyledSectionDesc>
          <StyledContainerTitle>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </StyledContainerTitle>
          <div>
            <StyledButton
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={25} />
              GitHub
            </StyledButton>
            <StyledButton href={project.link} target="_blank" rel="noreferrer">
              <AiOutlineLink size={25} />
              Acesse o projeto
            </StyledButton>
          </div>
        </StyledSectionDesc>
        <StyledSectionImg>
          <img src={project.image} alt={project.name} />
        </StyledSectionImg>
      </StyledContainer>
    </StyledProject>
  );
};

export default Project;
