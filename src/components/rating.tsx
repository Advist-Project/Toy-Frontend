import React from "react";

import styled from "@emotion/styled";
import { StarRating } from "./star-rating";

interface IRatingProps {
  value: number,
  count: number;
}

export const Rating: React.FC<IRatingProps> = ({ value, count }) => {
  return (
    <Container>
      <Content>
        <StarRating value={value} />
        <Rate>{value}</Rate>
        <Count>({count}개의 평가)</Count>
      </Content>
    </Container>
  );
};

export const RatingBig: React.FC<IRatingProps> = ({ value, count }) => {
  return (
    <Container className="big">
      <Content>
        <Rate className="big">{value}</Rate>
        <div>
          <StarRating value={value} />
          <Count>{count}개의 후기</Count>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  &.big {
    background: #f2f3f7;
    padding: 28px 0;
    margin: 20px 0 0;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: center;
`;

const Rate = styled.h3`
  margin: 0 0 0 4px;
  color: #303441;
  font-size: 18px;
  font-weight: 700;

  &.big {
    font-size: 50px;
    margin: 0 7px 0 0;
  }
`;

const Count = styled.h5`
  margin: 0 0 0 4px;
  color: #9a9ba7;
  font-size: 14px;
`;