export const  AgreementList = () => {}
/*
import React, {useState} from "react";
import styled from "@emotion/styled";

export const AgreementList = () => {
    const [isChecked1,setChecked1] = useState(false);
    const [isChecked2,setChecked2] = useState(false);
    const [isChecked3,setChecked3] = useState(false);
    const [isChecked4,setChecked4] = useState(false);
    const [isChecked5,setChecked5] = useState(false);


  return (

    <AgreementCheckElseForm>
    <AgreementCheckElse>
    <CheckBox type="image" defaultChecked={isChecked1} onClick = {() => setChecked1(!isChecked1)} src={CheckImg[isChecked1? 'check' : 'uncheck']}/>
      <AgreementCheckMsgForm>
        <AgreementCheckMsg>만 14세 이상입니다.</AgreementCheckMsg>
        <span style={{color : 'red'}}>&nbsp;(필수)</span>
      </AgreementCheckMsgForm>                       
    </AgreementCheckElse>

    <AgreementCheckElse>
    <CheckBox type="image" defaultChecked={isChecked2} onClick = {() => setChecked2(!isChecked2)} src={CheckImg[isChecked2? 'check' : 'uncheck']}/>
      <AgreementCheckMsgForm>
        <a href="http://www.naver.com" target="_blank">서비스 이용약관</a>
        <AgreementCheckMsg> 에 동의합니다.</AgreementCheckMsg>
        <span style={{color : 'red'}}>&nbsp;(필수)</span>
      </AgreementCheckMsgForm>                       
    </AgreementCheckElse>

    <AgreementCheckElse>
    <CheckBox type="image" defaultChecked={isChecked3} onClick = {() => setChecked3(!isChecked3)} src={CheckImg[isChecked3? 'check' : 'uncheck']}/>
      <AgreementCheckMsgForm>
        <a href="http://www.naver.com" target="_blank">개인정보 수집•이용</a>
        <AgreementCheckMsg> 에 동의합니다.</AgreementCheckMsg>
        <span style={{color : 'red'}}>&nbsp;(필수)</span>
      </AgreementCheckMsgForm>                       
    </AgreementCheckElse>   

    <AgreementCheckElse>
    <CheckBox type="image" defaultChecked={isChecked4} onClick = {() => setChecked4(!isChecked4)} src={CheckImg[isChecked4? 'check' : 'uncheck']}/>
      <AgreementCheckMsgForm>
        <AgreementCheckMsg>이벤트 할인 혜택 알림 수신에 동의합니다. (선택)</AgreementCheckMsg>
      </AgreementCheckMsgForm>                       
    </AgreementCheckElse>

    <AgreementCheckElse>
    <CheckBox type="image" defaultChecked={isChecked5} onClick = {() => setChecked5(!isChecked5)} src={CheckImg[isChecked5? 'check' : 'uncheck']}/>
      <AgreementCheckMsgForm>
        <AgreementCheckMsg>장기 미접속 시 계정 활성 상태 유지합니다. (선택)</AgreementCheckMsg>
      </AgreementCheckMsgForm>                       
    </AgreementCheckElse>                                                             
  </AgreementCheckElseForm>

  );
};

const AgreementCheckElseForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 245px;
  height: 141px;
  left: 16px;
  top: 70px;
`;

const AgreementCheckElse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 381px;
  height: 21px;
  left: 0px;
  top: 0px;


  flex-grow: 0;
  margin : 0px 0px 9px 15px;
`;

const AgreementCheckMsgForm = styled.div`
  width: 360px;
  height: 21px;
  line-height : 21px;  
  left: 23px;
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 20px;


  color: #555969;

  display : flex;
  flex-direction: row;


  margin: 0px 5px;
`;

const AgreementCheckMsg = styled.div`
  width: auto;
  height: 21px;
`;

const CheckBox = styled.input`
  height: 18px;
  width: 18px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background: url(image.png);
`;

const CheckImg = {
    check : "https://kmong.com/img/checkBox/round_checked.png",
    uncheck : "https://kmong.com/img/checkBox/round_unCheck.png"
  }
*/