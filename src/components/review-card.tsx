import React from "react";

import styled from "@emotion/styled";
import { StarRatingSmall } from "./star-rating";

export const ReviewCard = () => {
  return (
    <Container>
      <Image src="https://kmong.com/img/tools/main_user_gray.png" />
      <Content>
        <Info>
          <Date>21.03.08 18:52 |</Date>
          <StarRatingSmall value={3} />
        </Info>
        <Comment>내가 여기서 쓰러질 것 같냐 아이들아 넘어져도 쓰리고 인생은 길고 내 음악도 길어 모험은 시작됐어 마미손 가자 렛츠고 도넛맨 미안해 마이크 못줘서 미안해</Comment>
        <UserName>상*****</UserName>
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