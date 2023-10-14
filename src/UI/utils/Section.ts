import styled from "styled-components";
import { lightColor, mdColor } from "../variables";

interface propsSection {
  dark?: boolean
}

export const StyledSection = styled.section<propsSection>`
  box-sizing: border-box;
  padding: 3rem 0;
  background-color: ${({ dark }) => dark ? mdColor : lightColor};
`