import styled from "styled-components";
import { StyledSection } from "../../UI/utils/Section";
import { StyledContainer } from "../../UI/utils/utils";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import data from "../../data/data.json";
import { darkColor } from "../../UI/variables";
import { useEffect, useRef, useState } from "react";
import scrollReveal from "scrollreveal";
import { IProject } from "../../interfaces/IProject";

const StyledContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 32px;

  margin-top: 32px;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${darkColor};
  color: white;
  text-decoration: underline;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 32px;

  &:hover {
    background-color: #897563;
    transition: 0.4s;
  }
`;

const Projects = () => {
  const halfData = data.slice(0, Number((data.length / 2).toFixed()));
  const [projects, setProjects] = useState<IProject[]>(halfData);
  const [btnState, setBtnState] = useState(false);

  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef.current)
      scrollReveal().reveal(elementRef.current, {
        reset: true,
        delay: 300
      });
  }, [])

  return (
    <StyledSection id="projects">
      <StyledContainer ref={elementRef}>
        <Title text="Projetos" />
        <StyledContainerCards>
          {projects.map((project) => (
            <Card
              key={project.id}
              img={project.image}
              github={project.github}
              link={project.link}
              name={project.name}
            />
          ))}
        </StyledContainerCards>
        {btnState ? (
          <StyledButton onClick={() => {
            setProjects(halfData);
            setBtnState(!btnState)
          }}>
            Ver menos
          </StyledButton>
        ) : (
          <StyledButton onClick={() => {
            setProjects(data);
            setBtnState(!btnState)
          }}>
            Ver mais
          </StyledButton>
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export default Projects;
