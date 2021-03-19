import React, { useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import styled from "@emotion/styled";
//import axios from "axios";
import { RequestBootpay } from '../../components/request-bootpay';
import { priceFormat } from '../../components/formatter';

interface IOrderForm{ price: number, name: string, pg: string; phoneNumber: string; username: string; email: string; address: string; payMethod: string };

function OrderPage({BookData}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const { price, title, owner, ownerIcon } = BookData.detail;

  let loginState:boolean = true;

  //주문서 정보
  let [orderForm, setOrderForm] = useState<IOrderForm>({
    price: price, //초기 가격과 책이름 @API - book/details
    name: title,
    pg: "inicis",
    payMethod: "card", //초기값 신용카드
    username: "홍길동", //이름과 이메일은 유저정보 api 통해서 가져올 예정
    email: "kildoong@hong.com",
    phoneNumber: "",
    address: ""
  });
  const { phoneNumber, address } = orderForm; //orderForm에 있는 값 꺼내오기

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { //인풋에 변화가 생기면 orderForm 갱신
    const { name, value } = e.target;
    setOrderForm({
      ...orderForm,
      [name]: value
    });
  };

  //수량 선택 용
  let [amount, setAmount] = useState<number>(1); //초기 수량
  const onIncrease = () => setAmount(amount + 1);
  const onDecrease = () => setAmount(amount - 1 ? amount - 1 : amount);

  useEffect(() => {
    setOrderForm({ ...orderForm, price: price * amount });
  },[amount]);

  //결제 방법 라디오 버튼 용
  let [selectedChkbox, selectChkbox] = useState<string>("SC0010");

  //결제 동의 체크박스 용
  let [agreementState, setAgreementState] = useState<boolean>(false);

  return (
    <Background>
      <Title>결제하기</Title>
      <LayoutContainer>
        <OrderMain>
          <OrderInfo>
            <SectionTitle>주문 내역</SectionTitle>
            <BookInfo>
              <BookImg src="https://d2v80xjmx68n4w.cloudfront.net/gigs/bNuAr1602485711.jpg"/>
              <div>
                <h4>전자책 부문 1위 '돈 버는 전자책 작성법 2021'을 드립니다.</h4>
                <OwnerInfo>
                  {/* 판매자명 판매자 사진 @API - book/details */}
                  <OwnerIcon src={ownerIcon} />
                  <OwnerName>{owner}</OwnerName>
                </OwnerInfo>
              </div>
            </BookInfo>
            <OptionsTable>
              <colgroup>
                <col width="538"/>
              </colgroup>
              <thead>
                <tr>
                  <th>기본항목</th>
                  <th className="text-center">수량선택</th>
                  <th className="text-right">가격</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* 책 제목, 가격 @API - book/details */}
                  <td>{title}</td>
                  <td className="text-center">
                    <AmountBtn onClick={onDecrease}>-</AmountBtn>
                    <Amount>{amount}</Amount>
                    <AmountBtn onClick={onIncrease}>+</AmountBtn>
                  </td>
                  <td className="text-right">{priceFormat(orderForm.price)}원</td>
                </tr>
              </tbody>
            </OptionsTable>
          </OrderInfo>
          <OrderCustomerInfo>
            <SectionTitle>전화번호</SectionTitle>
            <input type="tel" name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="010-0000-0000" />
            <SectionTitle>주소</SectionTitle>
            <input type="address" name="address" value={address} onChange={handleChange} placeholder="주소를 입력해 주세요." />
          </OrderCustomerInfo>
          <OrderPaymentMethods>
            <SectionTitle>결제방법</SectionTitle>
            {/* card - 신용카드 결제
                phone - 휴대폰 소액결제
                bank - 실시간 계좌이체
                vbank - 가상계좌
                auth - 본인인증 ( 현재는 다날만 가능 )
                card_rebill - 카드 정기결제
                easy - 카카오, 페이코등의 간편결제
            */}
            <input type="radio" name="payMethod" id="payMethod_SC0010"
                                                value="card"
                                                checked={selectedChkbox === "SC0010" ? true : false }
                                                onClick={()=>selectChkbox("SC0010")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_SC0010">신용카드</label>
            <input type="radio" name="payMethod" id="payMethod_SC0060"
                                                value="phone"
                                                checked={selectedChkbox === "SC0060" ? true : false }
                                                onClick={()=>selectChkbox("SC0060")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_SC0060">휴대폰</label>
            <input type="radio" name="payMethod" id="payMethod_KAKAO"
                                                value="kakao"
                                                checked={selectedChkbox === "KAKAO" ? true : false }
                                                onClick={()=>selectChkbox("KAKAO")}
                                                onChange={handleChange} />
            <label htmlFor="payMethod_KAKAO">카카오페이</label>
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
              <RequestBootpay agreementState={agreementState} data={orderForm}>결제하기</RequestBootpay>:
              <PayGuestLoginBtn onClick={()=>{console.log('로그인해주세요.')}}>결제하기</PayGuestLoginBtn>
            }
          </OrderSummaryContent>
        </OrderSummary>
      </LayoutContainer>
    </Background>
  )
}

export default OrderPage;

//서버에서 책 데이터 가져오기
export const getServerSideProps: GetServerSideProps = async (context) => {

  const res = await fetch(`https://vjsel.herokuapp.com/book/details/${context.query.id}`)
  const data = await res.json()

  if (!data) {
    alert('데이터를 가져오는데 실패했습니다.');
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { BookData: data },
  }
}


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

const BookInfo = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const BookImg = styled.img`
  width: 120px;
  margin-right: 12px;
  border: 1px solid #f2f3f7;
  border-radius: 4px;
`;

const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 4px 0 0 0;
`;

const OwnerIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  border-radius: 50%;
`;

const OwnerName = styled.span`
  font-size: 13px;
  color: #9a9ba7;
  margin-left: 8px;
`;

//주문 내역 > 옵션의 테이블
const OptionsTable = styled.table`
  width: 100%;
  text-align: left;
  table-layout: fixed;

  & .text-center {
    text-align: center;
  }
  & .text-right {
    text-align: right;
  }
  & thead {
    border-bottom: 1px solid #e4e5ed;
  }
  & thead > tr > th {
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    color: #9a9ba7;
    margin: 0;
    vertical-align: middle;
  }
  & tbody > tr > td {
    height: 40px;
    padding-top: 6px;
    vertical-align: middle;
  }
`;

const AmountBtn = styled.button`
  background-color: #f2f3f7;
  border-radius: 5px !important;
  color: #8f92a6;
  font-weight: bolder;
  font-size: 10px;
  width: 20px;
  height: 20px;
  border: 0;
  vertical-align: middle;
`;

const Amount = styled.span`
  font-size: 14px;
  color: #303441;
  display: inline-block;
  width: 28px;
  line-height: 20px;
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

  & input {
    width: 398px;
    height: 50px;
    font-size: 14px;
    line-height: 26px;
    padding: 0 20px;
    border-radius: 4px;
    border: 1px solid #e4e5ed;
  }
  & input + h3 {
    margin-top: 20px;
  }
`;

const OrderPaymentMethods = styled.section`
  border-radius: 4px;
  padding: 24px;
  border: 1px solid #e4e5ed;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 15px;
  font-weight: bold;
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