import React, {useState} from "react";

import styled from "@emotion/styled";
import {AgreementList} from "./agreement-list";

export const Agreement= () => {

  const [isCheckedAll,setCheckedAll] = useState(false);
  const getImageNameAll = isCheckedAll ? 'check' : 'uncheck';

    return (
      <AgreementSummit>
      <ArgreementHeader>약관동의</ArgreementHeader>
      <ArgreementCheckForm>
        <AgreementCheckAll>
            <CheckBox type="image" checked={!isCheckedAll} onClick = {() => setCheckedAll(!isCheckedAll)} src={CheckImg[getImageNameAll]}/>
            <AgreementCheckAllMsg>모두 동의합니다.</AgreementCheckAllMsg>
        </AgreementCheckAll>
        <AgreementCheckAllLine></AgreementCheckAllLine>
        {/* 약관 리스트 */}
        <AgreementList/>

      </ArgreementCheckForm>    
      <SummitButton>버튼만 누르면 가입완료!</SummitButton>                
    </AgreementSummit>


    );
  };


const AgreementSummit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 398px;
  height: 322px;
  left: 0px;
  top: 375px;


  /* Inside Auto Layout */

  flex: none;
  order: 3;
  flex-grow: 0;
  margin-top : 30px;
`;

const ArgreementHeader = styled.div`
  width: 67px;
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

const ArgreementCheckForm = styled.div`
  width: 398px;
  height: 227px;
  left: 0px;
  top: 35px;

  border: 1px solid #E4E5ED;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

const AgreementCheckAll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 121px;
  height: 21px;
  left: 16px;
  top: 20px;

  margin : 20px 15px;
`;


const CheckBox = styled.input`
  height: 18px;
  width: 18px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background: url(image.png);
`;

const AgreementCheckAllMsg = styled.div`
  width: 250px;
  height: 21px;
  left: 23px;
  top: 0px;

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  color: #555969;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 5px;
`;

const AgreementCheckAllLine = styled.div`
  width: 366px;
  height: 1px;
  left: 16px;
  top: 56px;

  margin : 0px 16px 13px 16px;
  background: #CCCCCC;  
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

const CheckImg = {
  check : "https://kmong.com/img/checkBox/round_checked.png",
  uncheck : "https://kmong.com/img/checkBox/round_unCheck.png"
}