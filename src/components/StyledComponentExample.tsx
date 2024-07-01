import React from "react";
import styled from "styled-components";

const Title = styled.h1<{ $color?: string }>`
  color: ${(props) => props.$color || "red"};
  font-size: 24px;
  text-align: center;

  &:hover {
    color: blue;
  }
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const StyledComponentExample: React.FC = () => {
  return (
    <Wrapper>
      <Title $color="green">Hello World!</Title>
    </Wrapper>
  );
};

export default StyledComponentExample;
