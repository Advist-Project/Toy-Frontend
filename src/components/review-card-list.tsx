import React from "react";

import styled from "@emotion/styled";
import { ReviewCard } from "./review-card";

export const ReviewList = () => {
  return (
    <Container>
      <ul>
        {new Array(3).fill(0).map((_, index) => (
          <ReviewCard key={index} />
        ))}
      </ul>
      <ViewmoreButton>더 보기</ViewmoreButton>
    </Container>
  );
};

const Container = styled.div``;

const ViewmoreButton = styled.button`
  border-radius: 4px;
  height: 40px;
  padding: 0;
  border: 1px solid transparent;
  border-color: #e4e5ed;
  background: #fff;
  color: #9a9ba7;
  width: 100%;
  font-size: 13px;
  margin-top: 25px;
  cursor: pointer;
`;