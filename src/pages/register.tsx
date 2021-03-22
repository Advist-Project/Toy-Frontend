import React, {useState} from "react";
import styled from "@emotion/styled";

import { Agreement } from  "components/agreement";
import {isEmail, isPassword, isSummit} from "components/check";
import { registerUser } from "../_actions/user_action";

function RegisterPage(){

  const [typingName, setName] = useState("");
  const [typingEmail, setEmail] = useState("");
  const [typingPassword, setPassword] = useState("");
  const [typingConfirmPassword, setConfirmPassword] = useState("")

  const onSubmitEmailHandler = (event : any) => {
    event.preventDefault();
    console.log(typingEmail)

  } 

  const onSubmitAllHandler = (event : any) => {
    event.preventDefault(); // 로그인 버튼 클릭시 리프레시 막아줌

    let body = {
      name : typingName,
      email : typingEmail,
      password : typingPassword
    }
    console.log(body)

    registerUser(body)
  }

  return (
    <Background>
      <Container>
      <Image src = "https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"/>
        <Frame>
          <Header>딱 이것만 체크하면 가입 완료!!</Header>
          <Content>
                <Name>
                  <NameHeader>이름</NameHeader>
                  <NameInput type = "text" value={typingName} placeholder ="이름을 입력하세요" onChange = {(event) => setName(event.currentTarget.value)} />
                </Name>
                <Email>
                  <EmailHeader>이메일</EmailHeader>
                  <EmailSummit>
                    <EmailInput type = "email" value={typingEmail} placeholder ="이메일을 입력하세요"  onChange = {(event) => setEmail(event.currentTarget.value)}/>
                    <EmailConfirm disabled = {!isEmail(typingEmail)} onClick = {onSubmitEmailHandler} type="submit" style = {{background : isEmail(typingEmail) ? "yellow" : "#E4E5ED", color : isEmail(typingEmail) ? "black" : "#9A9BA7" }} >인증하기</EmailConfirm>
                  </EmailSummit>   
                  {(typingEmail === "" || isEmail(typingEmail)) ? (<span hidden={true}/>) : (<span style = {{color : "red", order : 3, fontSize : "12px"}}>이메일 형식이 유효하지 않습니다.</span>)}               
                </Email>
                <Password>
                  <PasswordHeader>비밀번호</PasswordHeader>
                  <PasswordInput type = "password" value={typingPassword} placeholder ="비밀번호를 입력해주세요 (6자 이상)"  onChange = {(event) => setPassword(event.currentTarget.value)} />
                  {(typingPassword === "" || isPassword(typingPassword)) ? (<span hidden={true}/>) : (<span style = {{color : "red", order : 1, fontSize : "12px"}}>비밀번호는 6자 이상 입력해주세요.</span>)}
                  <PasswordConfirmInput disabled={(typingPassword === "")} type = "password" value={typingConfirmPassword} placeholder ="비밀번호를 한 번 더 입력해주세요."  onChange = {(event) => setConfirmPassword(event.currentTarget.value)} />
                  {((typingConfirmPassword === "") || (typingPassword === typingConfirmPassword)) ? (<span hidden={true}/>) : (<span style = {{color : "red", order : 3, fontSize : "12px"}}>입력하신 비밀번호와 동일하게 입력해주세요.</span>)}
                </Password>
               {/* 약관동의 & 제출버튼 */}
                <Agreement/>
                <SummitButton disabled={!isSummit(typingPassword, typingConfirmPassword, typingEmail)} onClick={onSubmitAllHandler} type ="submit" style = {{background : (isSummit(typingPassword, typingConfirmPassword, typingEmail)) ? "yellow" : "#E4E5ED", color : isSummit(typingPassword, typingConfirmPassword, typingEmail) ? "black" : "#9A9BA7" }}>버튼만 누르면 가입완료!</SummitButton>
          </Content>
        </Frame>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position : fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  padding-top: 48px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction : column;
  justify-content: space-between;
  align-items: center;
`;

const Frame = styled.div`
  /* Frame */
  display: flex;
  flex-direction: column;

  width: 600px;
  height: 975px;
  left: 340px;
  top: 130px;

  margin-top : 27px;

  background: #FFFFFF;
  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;
`;

const Header = styled.div`
    /* 딱 이것만 체크하면 가입완료!! */

    margin-top : 86px;
    margin-left : 101px;
    margin-right : 146px;

    width: 353px;
    height: 33px;
    left: 441px;
    top: 216px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height, or 118% */
    
    letter-spacing: 0.3px;
    
    color: #303441;
`;

const Image = styled.img`
  /* Rectangle */
  width: 108px;
  height: 27px;
  left: 586px;
  top: 76px;
  
  background: url(.png);
  border-radius: 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin : 36px 101px 123px 101px;
  padding: 0px;

  width: 398px;
  height: 697px;
  left: 441px;
  top: 285px;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 398px;
  height: 85px;
  left: 0px;
  top: 0px;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const NameHeader = styled.div`
  font-size: 16px;
  color: #303441
`;

const NameInput = styled.input`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 35px;

  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  
  width: 398px;
  height: 85px;
  left: 0px;
  top: 100px;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const EmailHeader = styled.div`
  width: 53x;
  height: 25px;
  left: 0px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 165% */

  letter-spacing: 0.16px;

  color: #303441;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const EmailSummit = styled.div`
  display : flex;
  flex-direction : row;

  width: 398px;
  height: 50px;
  left: 0px;
  top: 35px;
  
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;
  
  /* Inside Auto Layout */
  
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px 10px 0px;  
`;

const EmailInput = styled.input`
  width: 276px;
  background: #FFFFFF;
  border: 0px;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;

`;

const EmailConfirm = styled.button`
  cursor : pointer;

  margin : 5px 5px 5px 5px;
  order : 2;

  width: 110px;
  height: 38px;
  left: 283px;
  top: 5px;  

  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;

  font-size: 14px;  

`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 398px;
  height: 145px;
  left: 0px;
  top: 200px;

  margin-top : 20px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const PasswordHeader = styled.div`
  width: 80px;
  height: 25px;
  left: 0px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 165% */

  letter-spacing: 0.16px;

  color: #303441;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const PasswordInput = styled.input`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 35px;

  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px 0px 0px;
`;

const PasswordConfirmInput = styled.input`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 95px;

  margin-top : 10px;

  background: #FAFAFA;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const SummitButton = styled.button`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 272px;

  cursor : pointer;
  background: #E4E5ED;
  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;
  color: #9A9BA7;
  /* Inside Auto Layout */

  flex: none;
  order: 4;
  flex-grow: 0;
  margin: 10px 0px;
`;


export default RegisterPage;