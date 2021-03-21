import React, {useState} from 'react';
import styled from "@emotion/styled";
import Router from 'next/router';
import { loginUser } from "../_actions/user_action";
import {isEmail, isPassword} from "components/check";

function LoginPage(){

    const [typingEmail, setEmail] = useState("");
    const [typingPassword, setPassword] = useState("");

    const onSubmitHandler = (event : any) => {
        event.preventDefault(); // 로그인 버튼 클릭시 리프레시 막아줌

        let body = {
            email : typingEmail,
            password : typingPassword
        }
        console.log(body)

        loginUser(body)
    }
    
    return(
    <Background>
        <Container>
            {/*왼쪽 이미지*/}
            <LeftImage>

            </LeftImage>
            {/*오른쪽 로그인*/}
            <LoginFrame>
                <LoginHeader>로그인</LoginHeader>
                <LoginForm onSubmit = {onSubmitHandler}>
                    <EmailInput type = "email" value={typingEmail} placeholder ="이메일을 입력하세요"  onChange = {(event) => setEmail(event.currentTarget.value)}/>
                    <PasswordInput type = "password" value={typingPassword} placeholder ="비밀번호를 입력해주세요"  onChange = {(event) => setPassword(event.currentTarget.value)} />
                    <LoginSubmit disabled = {!((isEmail(typingEmail) && (isPassword(typingPassword))))} type = "submit">로그인</LoginSubmit>
                    <div style={{display : 'flex', flexDirection : 'row'}}>
                        <KeepLogin type="checkbox"/>
                        <KeepLoginName>로그인 유지</KeepLoginName>
                    </div>
                </LoginForm>
                <RegisterButton onClick = {() => Router.push('./register')}>크몽 회원가입 하기</RegisterButton>
            </LoginFrame>
        </Container>

    </Background>

    )
}

const Background = styled.div`
    position : fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
`;

const Container = styled.div`
    width: 1022px;
    height: 656px;
    display: flex;

    margin: auto;

    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.33);
    border-radius: 11px 10px 10px 11px;
`;

const LeftImage = styled.input`
    width: 602px;
    height: 656px;
    left: 129px;
    top: 180px;

    background: url(.png);
    border-radius: 10px 0px 0px 10px;
`;

const LoginFrame = styled.div`
    width: 340px;
    height: 576px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;

`;

const LoginHeader = styled.div`

    left: 771px;
    top: 216px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 28px;
    /* identical to box height, or 122% */


    color: #303441;
`;

const LoginForm = styled.form``;

const EmailInput = styled.input`
    width: 340px;
    height: 52px;

    margin-top : 24px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 6px;   
`;

const PasswordInput = styled.input`
    width: 340px;
    height: 52px;
    margin-top : 15px;

    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    box-sizing: border-box;
    border-radius: 6px; 
`;

const LoginSubmit = styled.button`
    cursor : pointer;
    width: 340px;
    height: 58px;
    margin-top : 15px;

    background: #FFD400;
    border: 1px solid #FFD400;
    box-sizing: border-box;
    border-radius: 4px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;    
`;

const KeepLogin = styled.input`
    width: 18px;
    height: 18px;
    left: 0px;
    top: 2px;

    background: #FFD400;
    border-radius: 3px;
`;

const KeepLoginName = styled.div`
    left: 26px;
    top: 0px;
    margin-left : 3px; 

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    /* identical to box height, or 166% */


    color: #555969;
`;

const RegisterButton = styled.button`
    cursor : pointer;
    width: 340px;
    height: 58px;

    margin-top : 246px;

    background: #FFFFFF;
    border: 1px solid #116AD4;
    box-sizing: border-box;
    border-radius: 4px;
`;

export default LoginPage;