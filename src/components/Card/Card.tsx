import styled from "styled-components";
import { secondNameColor } from "../../UI/variables";
import imagem from "../../assets/projects/entertainment-web.png";

const StyledCard = styled.div`
  width: 320px;
  height: 400px;
  background-color: ${secondNameColor};
  padding: 1rem;
  box-sizing: border-box;
`

const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
  box-sizing: border-box;
  border: 3px solid white;
`


const Card = () => {
  return(
    <StyledCard>
      <StyledImg src={imagem} />
    </StyledCard>
  )
}

export default Card