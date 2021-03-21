import React, { useState } from "react";
import Link from 'next/link';
import styled from "@emotion/styled";
import LoginPage from "../pages/login";

export const Header = () => {
  let [isLogged, setLoginState] = useState<boolean>(false);
  let [loginModal, controlLoginModal] = useState<boolean>(false);

  return (
    <Background>
      <Container>
        <div>
          <Link href="/">
            <a><Logo src="https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"/></a>
          </Link>
          <A onClick={()=>{setLoginState(!isLogged)}}>[로그인/로그아웃 상태 전환]</A>
        </div>
        {
          isLogged
          ?
          <User>
            <Name>김개똥님</Name>
            <Img src="https://kmong.com/img/tools/main_user_gray.png"/>
          </User>
          :
          <div>
            <A onClick={()=>{controlLoginModal(!loginModal)}}>로그인</A>
            <Link href="/register">
              <a><RegisterBtn>회원가입</RegisterBtn></a>
            </Link>
          </div>
        }
      </Container>
      {
        loginModal ? <LoginPage/> : null
      }
    </Background>
  );
};

const Background = styled.header`
  border-bottom: 1px #E5E5E5 solid;
  padding: 40px 0;
`;
const Container = styled.div`
  width: 100%;
  height: 37px;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 91px;
  margin-right: 25px;
`;

const A = styled.a`
  cursor: pointer;
`

const RegisterBtn = styled.button`
  width: 100px;
  height: 37px;
  color: #303441;
  background: #FFD400;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    background: #f5c126;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  text-align: right;
  color: #303441;
  margin-right: 25px;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;