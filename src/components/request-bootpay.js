import React from "react";
import styled from "@emotion/styled";
import { isPhoneNumber } from './check';

export const RequestBootpay = (props) => {
  const { price, name, payMethod, username, email, address, phoneNumber } = props.data;
  const parameter = {
    price: price, //실제 결제되는 가격
    application_id: "6051d8fdd8c1bd0024f4c34c",
    name: name, //결제창에서 보여질 이름
    pg: 'inicis', //inicis, (kakao, npay, payco)-easy
    method: payMethod, //(card, phone, bank, vbank)-inisis, easy
    show_agree_window: 0,
    items: [ //통계정보로 활용됨, 한번에 결제하는 상품들의 개별 정보 //일단은 하나씩 구매한다고 가정하고 작성
      {
        item_name: name, 
        qty: 1, //수량
        unique: '123', //해당 상품을 구분짓는 primary key
        price: 1000, //상품 단가
        cat1: '취업·투잡', // 대표 상품의 카테고리 상, 50글자 이내
        cat2: '전자책·노하우', // 대표 상품의 카테고리 중, 50글자 이내
        cat3: '', // 대표상품의 카테고리 하, 50글자 이내
      }
    ],
    user_info: {
      username: username,
      email: email,
      addr: address,
      phone: phoneNumber
    },
    order_id: '고유order_id_1234', //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
    params: { callback1: '그대로 콜백받을 변수 1', callback2: '그대로 콜백받을 변수 2', customvar1234: '변수명도 마음대로' },
    account_expire_at: '2020-10-25', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
    extra: {
      vbank_result: 1, // 가상계좌 사용시 사용, 가상계좌 결과창을 볼지(1), 말지(0), 미설정시 봄(1)
      quota: '0,2,3', // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용
    }
  };

  return (
    <Btn onClick={()=>{
      if(!phoneNumber){
        alert('휴대폰 번호는 필수값 입니다.'); //휴대폰 번호 미입력 시
      } else if(!isPhoneNumber(phoneNumber)){
        alert('휴대폰 번호를 정확히 입력해주세요.'); //휴대폰 번호 형식 불일치 시
      } else if(!props.agreementState){
        alert('결제에 동의해주세요!'); //결제 동의 미 체크 시
      } else {
        requestBootpay(parameter);
        console.log(props.data);
      }
    }}>{ props.children }</Btn>
  );
};

const Btn = styled.button`
  color: #303441;
  background: #ffd400;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  font-weight: 500;
  border: 0;
  margin-top: 27px;
  padding: 15px 15px;
  cursor: pointer;
`;

function requestBootpay(parameter) {
  window.BootPay.request(parameter).error(function (data) {
    //결제 진행시 에러가 발생하면 수행됩니다.
    console.log(data);
  }).cancel(function (data) {
    //결제가 취소되면 수행됩니다.
    console.log(data);
  }).ready(function (data) {
    // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
    console.log(data);
  }).confirm(function (data) {
    //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
    //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
    console.log(data);
    var enable = true; // 재고 수량 관리 로직 혹은 다른 처리
    if (enable) {
      BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
    } else {
      BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
    }
  }).close(function (data) {
    // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
    console.log(data);
  }).done(function (data) {
    //결제가 정상적으로 완료되면 수행됩니다
    //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
    console.log(data);
  });
}