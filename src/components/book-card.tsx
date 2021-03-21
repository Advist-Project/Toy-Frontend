import React from "react";

import styled from "@emotion/styled";
import { priceFormat } from './formatter';

interface IBookCardProps {
  seq: number;
  title: string;
  price: number;
  img: string;
}

export const BookCard: React.FC<IBookCardProps> = ({ seq, title, price, img }) => {
  return (
    <Container>
      <a href={`/detail/${seq}`}>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          <Price>{priceFormat(price)}원</Price>
        </Content>
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: 216px;
  cursor: pointer;
  margin-bottom: 16px;

  & a {
    text-decoration: none;
    color: #303441;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.1);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  margin-top: 8px;
  margin-bottom: 16px;
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
