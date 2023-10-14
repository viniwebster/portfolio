import styled from "styled-components";
import { StyledSection } from "../../UI/utils/Section";
import { StyledContainer } from "../../UI/utils/utils";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";

const StyledContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 32px;
`

const Projects = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <Title text="Projetos" />
        <StyledContainerCards>
          <Card />
        </StyledContainerCards>
      </StyledContainer>
    </StyledSection>
  );
};

export default Projects;
