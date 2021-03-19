import React from "react";
import styled from "@emotion/styled";

function LoginPage(){

    
    return(
    <Background>
        <Container>
            {/*왼쪽 이미지*/}
            <LeftImage>

            </LeftImage>
            {/*오른쪽 로그인*/}
            <LoginFrame>
                <LoginHeader>로그인</LoginHeader>
            </LoginFrame>
        </Container>

    </Background>

    )
}

const Background = styled.div``;

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
    justify-content: space-between;
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

export default LoginPage;