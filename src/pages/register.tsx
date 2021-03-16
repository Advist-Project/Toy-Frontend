import React, {useState} from "react";
import styled from "@emotion/styled";

import { Agreement } from  "components/agreement";

function RegisterPage(props){

  const [typingName, setName] = useState("");
  const [typingEmail, setEmail] = useState("");
  const [typingPassword, setPassword] = useState("");
  const [typingConfirmPassword, setConfirmPassword] = useState("")

    // 키보드 입력시 입력내용 input tag에 써주기

const onSubmitEmailHandler = (event) => {
  event.preventDefault();
  alert('입력하신 이메일로 인증메일이 발송되었습니다.')
} 

const onSubmitAllHandler = (event) => {
  event.preventDefault(); // 로그인 버튼 클릭시 리프레시 막아줌

  if(typingPassword !== typingConfirmPassword){
      return alert('비밀번호가 일치하지 않습니다.')
  }

  let body = {
    name : typingName,
    email : typingEmail,
    Password : typingPassword
  }
}

  return (
    <Background>
      <Container>
      <Image src = "https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/pages/main/kmong_logo.png"/>
        <Frame>
          <Header>딱 이것만 체크하면 가입 완료!!</Header>
          <Content onSubmit = {onSubmitAllHandler}>
                <Name>
                  <NameHeader>이름</NameHeader>
                  <NameInput type = "text" value={typingName} placeholder ="이름을 입력하세요" onChange = {(event) => setName(event.currentTarget.value)} />
                </Name>
                <Email>
                  <EmailHeader>이메일</EmailHeader>
                  <EmailSummit onSubmit = {onSubmitEmailHandler}>
                    <EmailInput type = "email" value={typingEmail} placeholder ="이메일을 입력하세요"  onChange = {(event) => setEmail(event.currentTarget.value)}/>
                    <EmailConfirm type="submit">인증하기</EmailConfirm>
                  </EmailSummit>
                </Email>
                <Password>
                  <PasswordHeader>비밀번호</PasswordHeader>
                  <PasswordInput type = "password" value={typingPassword} placeholder ="비밀번호를 입력해주세요 (6자 이상)"  onChange = {(event) => setPassword(event.currentTarget.value)} />
                  <PasswordConfirmInput type = "password" value={typingConfirmPassword} placeholder ="비밀번호를 한 번 더 입력해주세요."  onChange = {(event) => setConfirmPassword(event.currentTarget.value)} />
                </Password>

               {/* 약관동의 & 제출버튼 */}
                <Agreement/>
          </Content>
        </Frame>
      </Container>
    </Background>
  );
};

const Background = styled.div``;

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

const Content = styled.form`
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

const EmailSummit = styled.form`
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

  background: #E4E5ED;
  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;

  color: #9A9BA7;
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
  margin: 10px 0px;
`;

const PasswordConfirmInput = styled.input`
  width: 398px;
  height: 50px;
  left: 0px;
  top: 95px;

  background: #FAFAFA;
  border: 1px solid #E6E6E6;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;


export default RegisterPage;