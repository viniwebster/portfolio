import styled from "styled-components";
import { darkColor, mdFont } from "../../UI/variables";

const StyledTitle = styled.h1`
  font-size: ${mdFont};
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${darkColor};
`;

interface props {
  text: string;
}

const Title = ({ text }: props) => {
  return (
    <>
      <StyledTitle>{text}</StyledTitle>
      <StyledBorder />
    </>
  );
};

export default Title