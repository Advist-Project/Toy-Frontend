import React from "react";

import styled from "@emotion/styled";

export const BookCard = () => {
  return (
    <Container>
      <a href="/detail">
        <Image src="https://d2v80xjmx68n4w.cloudfront.net/gigs/bNuAr1602485711.jpg" />
        <Content>
          <Title>전자책 부문 1위 '돈 버는 전자책 작성법 2021'을 드립니다.</Title>
          <Price>22,000원</Price>
        </Content>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: 216px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.23);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  margin-top: 8px;

  font-size: 14px;
  color: #303441;
  line-height: 1.2;
`;

const Price = styled.h3`
  margin-top: 4px;
  align-self: flex-end;

  font-size: 18px;
  font-weight: bold;
`;
