import React from "react";

import styled from "@emotion/styled";
import { StarRatingSmall } from "./star-rating";
import { dateFormat } from "./formatter";

interface IReviewCardProps {
  score: number;
  userId: string;
  content: string;
  createdAt: string;
}

export const ReviewCard: React.FC<IReviewCardProps> = ({ score, userId, content, createdAt }) => {
  return (
    <Container>
      <Image src="https://kmong.com/img/tools/main_user_gray.png" />
      <Content>
        <Info>
          <Date>{dateFormat(createdAt)} |</Date>
          <StarRatingSmall value={score} />
        </Info>
        <Comment>{content}</Comment>
        <UserName>{userId}</UserName>
      </Content>
    </Container>
  );
};

const Container = styled.li`
  padding: 25px 0;
  border-bottom: 1px solid #e4e5ed;
  display: flex;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 64px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display:flex;
  align-items: center;
`;

const Date = styled.span`
  font-size: 12px;
  color: #9a9ba7;
  padding-right: 3px;
`;

const Comment = styled.p`
  color: #555969;
  line-height: 1.5;
  font-size: 14px;
  margin-top: 14px;
`;

const UserName = styled.span`
  font-size: 12px;
  color: #9a9ba7;
  line-height: 1.5438;
`;