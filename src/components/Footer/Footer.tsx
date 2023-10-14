import styled from "styled-components"
import { mdColor, mdFont, veryDarkColor } from "../../UI/variables"

const StyledFooter = styled.footer`
  background-color: ${veryDarkColor};
  text-align: center;
  padding: 2rem 0;
`

const StyledParagraph = styled.p`
  color: ${mdColor};
  font-size: ${mdFont};
  font-weight: 600;
`

const Footer = () => {
  return(
    <StyledFooter>
      <StyledParagraph>Desenvolvido por Vinicius</StyledParagraph>
    </StyledFooter>
  )
}

export default Footer