import React from "react";

import styled from "@emotion/styled";
import { ReviewCard } from "./review-card";

interface IReviewListProps {
  data: any[];
}

export const ReviewList: React.FC<IReviewListProps> = ({ data }) => {
  return (
    <Container>
      <ul>
        {data.map((item) => (
          <ReviewCard key={item._id}
                      score={item.score}
                      userId={item.userId}
                      content={item.content}
                      createdAt={item.createdAt}
                      />
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