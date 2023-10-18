import styled from "styled-components";
import { darkColor, firstNameColor, mdColor, mdFont } from "../../UI/variables";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

const StyledCard = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${mdColor};
  padding: 1rem;
  box-sizing: border-box;
  color: ${darkColor};

  &:nth-child(even) {
    background-color: ${firstNameColor};
    color: white;
    div > div > a {
      color: white;
    }
  }

  div > div > a {
    color: ${darkColor};
  }
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
  box-sizing: border-box;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;

  h2 {
    font-weight: 800;
    font-size: ${mdFont};
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
`;

interface Props {
  img: string;
  link: string;
  github: string;
  name: string;
}

const Card = ({ img, github, link, name }: Props) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current)
      scrollReveal().reveal(elementRef.current, {
        reset: true,
        delay: 300
      });
  })


  return (
    <StyledCard ref={elementRef}>
      <StyledImg src={img} />
      <StyledDescriptionContainer>
        <h2>{name}</h2>
        <div>
          <AiFillGithub size={30} />
          <a href={github} target="_blank">
            Link no github
          </a>
        </div>
        <div>
          <AiOutlineLink size={30} />
          <a href={link} target="_blank">
            Link para ver o projeto
          </a>
        </div>
      </StyledDescriptionContainer>
    </StyledCard>
  );
};

export default Card;
