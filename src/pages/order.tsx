import React, { useState } from 'react';
import styled from "@emotion/styled";
import axios from "axios";

interface IOrderForm{ phoneNumber: string; address: string; payMethod: string };

function OrderPage() {
  let [orderForm, setOrderForm] = useState<IOrderForm>({
    phoneNumber: "",
    address: "",
    payMethod: "신용카드"
  });
  const { phoneNumber, address } = orderForm; //orderForm에 있는 값 꺼내오기

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { //인풋에 변화가 생기면 orderForm 갱신
    const { name, value } = e.target;
    setOrderForm({
      ...orderForm,
      [name]: value
    });
  };

  let loginState:boolean = true;
  let [selectedChkbox, selectChkbox] = useState<string>("SC0010");
  let [agreementState, setAgreementState] = useState<boolean>(false);

  function requestPayment(){
    let params:string = JSON.stringify({...orderForm, "agreementState": agreementState});
    console.log(params);
  
    // return axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  return (
    <Background>
      <Title>결제하기</Title>
      <LayoutContainer>
        <OrderMain>
          <OrderInfo>
            <SectionTitle>주문내역</SectionTitle>상품정보
            수량선택
          </OrderInfo>
          <OrderCustomerInfo>
            <SectionTitle>전화번호</SectionTitle>
            <input type="tel" name="phoneNumber" value={phoneNumber} onChange={handleChange} />
            <SectionTitle>주소</SectionTitle>
            <input type="address" name="address" value={address} onChange={handleChange} />
          </OrderCustomerInfo>
          <OrderPaymentMethods>
            <SectionTitle>결제방법</SectionTitle>
            <input type="radio" name="payMethod" id="payMethod_SC0010"
                                                value="신용카드"
                                                checked={selectedChkbox === "SC0010" ? true : false }
                                                onClick={()=>selectChkbox("SC0010")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_SC0010">신용카드</label>
            <input type="radio" name="payMethod" id="payMethod_SC0030"
                                                value="실시간 계좌이체"
                                                checked={selectedChkbox === "SC0030" ? true : false }
                                                onClick={()=>selectChkbox("SC0030")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_SC0030">실시간 계좌이체</label>
            <input type="radio" name="payMethod" id="payMethod_SC0040"
                                                value="무통장입금"
                                                checked={selectedChkbox === "SC0040" ? true : false }
                                                onClick={()=>selectChkbox("SC0040")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_SC0040">무통장입금</label>
            <input type="radio" name="payMethod" id="payMethod_SC0060"
                                                value="휴대폰"
                                                checked={selectedChkbox === "SC0060" ? true : false }
                                                onClick={()=>selectChkbox("SC0060")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_SC0060">휴대폰</label>
            <input type="radio" name="payMethod" id="payMethod_PAYNOW"
                                                value="페이나우"
                                                checked={selectedChkbox === "페이나우" ? true : false }
                                                onClick={()=>selectChkbox("페이나우")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_PAYNOW">페이나우</label>
            <input type="radio" name="payMethod" id="payMethod_PAYCO"
                                                value="페이코"
                                                checked={selectedChkbox === "페이코" ? true : false }
                                                onClick={()=>selectChkbox("페이코")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_PAYCO">페이코</label>
          </OrderPaymentMethods>
        </OrderMain>
        <OrderSummary>
          <OrderSummaryContent>
            <div>
              <input type="checkbox" id="agreementCheckbox"
                                    onChange={()=>{
                                      setAgreementState(agreementState ? false : true);
                                    }} />
              <ChkboxLabel htmlFor="agreementCheckbox">주문 내용을 확인하였으며, 결제에 동의합니다. (필수)</ChkboxLabel>
            </div>
            {
              loginState?
              <PayGuestLoginBtn onClick={requestPayment}>결제하기</PayGuestLoginBtn>:
              <PayGuestLoginBtn onClick={()=>{console.log('로그인해주세요.')}}>결제하기</PayGuestLoginBtn>
            }
          </OrderSummaryContent>
        </OrderSummary>
      </LayoutContainer>
    </Background>
  )
}

export default OrderPage;

const Background = styled.div``;

const Title = styled.h2`
  width: 1170px;
  margin: 32px auto 16px auto;
  font-weight: 500;
  color: #212224;
  line-height: 36px;
  font-size: 24px;
`;

const LayoutContainer = styled.div`
  width: 1170px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const OrderMain = styled.div`
  width: 784px;
  margin-right: 16px;
`;

const OrderInfo = styled.section`
  border-radius: 4px;
  padding: 24px;
  border: 1px solid #e4e5ed;
  margin-bottom: 24px;
`;

const OrderSummary = styled.div`
  width: 370px;
  position: relative;
`;

const OrderSummaryContent = styled.div`
  position: sticky;
  top: 0;
  border-radius: 4px;
  border: 1px solid #e4e5ed;
  padding: 32px 24px 32px 24px;
`;

const OrderCustomerInfo = styled.section`
  border-radius: 4px;
  padding: 24px;
  border: 1px solid #e4e5ed;
  margin-bottom: 24px;
`;

const OrderPaymentMethods = styled.section`
  border-radius: 4px;
  padding: 24px;
  border: 1px solid #e4e5ed;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 15px;
  line-height: 23px;
  color: #303441;
  margin: 0 0 16px 0;
`;

const PayGuestLoginBtn = styled.button`
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

const ChkboxLabel = styled.label`
  font-size: 12px;
  line-height: 17px;
  margin-left: 4px;
  color: #555969;
  vertical-align: middle;
`;