import React from "react";

import styled from "@emotion/styled";

export const Banner = () => {
  return (
    <Background>
      <Container>
        <Title>
          내 이름으로 발행하는 책
          <br />
          전자책 & 출판
        </Title>
        <Image src="https://d2v80xjmx68n4w.cloudfront.net/md-picks/Ilm1l1604312539.jpg" />
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  height: 470px;
  background-color: #d86f73;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 620px;
  height: 380px;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;
`;
