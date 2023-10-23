import styled from "styled-components";
import { mdColor, veryDarkColor } from "../../UI/variables";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

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

  @media screen and (max-width: 500px){
    padding: 1rem;
    div > a {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media screen and (max-width: 500px){
   gap: 16px; 
  }  
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 500px){
   gap: 16px; 
  }  
`;

const StyledA = styled(HashLink)`
  color: ${mdColor};
  font-weight: 600;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <HashLink to={"/"}>
          <BsCodeSlash color={mdColor} size={40} />
        </HashLink>
        <StyledUl>
          <li>
            <StyledA to="/#aboutme">Sobre mim</StyledA>
          </li>
          <li>
            <StyledA to="/#projects">Projetos</StyledA>
          </li>
        </StyledUl>
      </StyledNav>
      <div>
        <a
          href="https://www.linkedin.com/in/viniwebster/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin color={mdColor} size={40} />
        </a>
        <a
          href="https://github.com/viniwebster"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub color={mdColor} size={40} />
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;
