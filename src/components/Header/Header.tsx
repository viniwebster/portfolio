import styled from "styled-components";
import { mdColor, veryDarkColor } from "../../UI/variables";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${veryDarkColor};
  padding: 1rem 4rem;

  div > a {
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledA = styled.a`
  color: ${mdColor};
  font-weight: 600;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <BsCodeSlash color={mdColor} size={50} />
        <StyledUl>
          <li>
            <StyledA href="#aboutme">Sobre mim</StyledA>
          </li>
          <li>
            <StyledA href="#projects">Projetos</StyledA>
          </li>
          <li>
            <StyledA href="#habilits">Habilidades</StyledA>
          </li>
        </StyledUl>
      </StyledNav>
      <div>
        <a href="https://www.linkedin.com/in/viniwebster/" target="_blank">
          <AiFillLinkedin color={mdColor} size={40} />
        </a>
        <a href="https://github.com/viniwebster" target="_blank">
          <AiFillGithub color={mdColor} size={40} />
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;
