import styled from "styled-components";
import { StyledSection } from "../../UI/utils/Section";
import { StyledContainer } from "../../UI/utils/utils";
import Title from "../../components/Title/Title";
import { darkColor, mdFont, normalFont, veryDarkColor } from "../../UI/variables";

const StyledName = styled.h2`
  color: ${darkColor};
  font-weight: 600;
  margin-top: 2rem;
  font-size: ${mdFont};
`;

const StyledText = styled.p`
  font-size: ${normalFont};
  text-align: start;
  margin-top: 1rem;
  line-height: 20px;
  color: ${veryDarkColor};
`;

const AboutMe = () => {
  return (
    <StyledSection id="#aboutme" dark>
      <StyledContainer>
        <Title text="Sobre mim" />
        <StyledName>Vinicius Webster Fernandes de Souza</StyledName>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          viverra ipsum, at posuere enim. Donec velit ex, dapibus eget purus ac,
          hendrerit luctus dolor. Maecenas non leo id tellus molestie rhoncus.
          Nunc vulputate vel felis ac facilisis. Nulla sem lectus, venenatis non
          tellus finibus, interdum viverra sem. Etiam in enim blandit, hendrerit
          nibh eget, mollis nisi. Curabitur laoreet volutpat quam, condimentum
          consectetur justo ultricies eu. Phasellus lobortis, justo ac tristique
          eleifend, augue orci vehicula libero, quis lacinia quam nisi
          vestibulum velit. Integer vel sapien eget lectus aliquet vestibulum ac
          eget ante. Morbi gravida elementum purus at tincidunt. Ut et tincidunt
          tortor, quis volutpat urna. In mollis nibh nisi. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean aliquet, nisl a condimentum
          tincidunt, leo mauris volutpat risus, volutpat tempus velit sem a
          velit. Sed vehicula dolor eget neque ultricies laoreet. Morbi nec
          libero vitae erat porttitor sagittis. Nulla ut dapibus orci. Maecenas
          non faucibus neque, sed lacinia justo. Duis id risus turpis. Maecenas
          nec semper massa. Ut luctus felis eu massa pulvinar, aliquam
          pellentesque erat pharetra. Duis efficitur leo eu auctor pulvinar. In
          hac habitasse platea dictumst.
        </StyledText>
      </StyledContainer>
    </StyledSection>
  );
};

export default AboutMe;
