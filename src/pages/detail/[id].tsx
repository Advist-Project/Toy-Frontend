import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import styled from "@emotion/styled";
import { Rating, RatingBig } from "components/rating";
import { ReviewList } from "components/review-card-list";


function DetailPage({BookData}: InferGetServerSidePropsType<typeof getServerSideProps>){
  console.log(BookData.detail);

  const { seq, title, description, owner, ownerIcon } = BookData.detail;

  return (
    <Background>
      <Container>
        <Content>
          {/* 왼쪽 영역 */}
          <LeftModules>
            <Image src="https://d2v80xjmx68n4w.cloudfront.net/gigs/bNuAr1602485711.jpg" />
            <Rating value={4.3} count={974} />
            <Section>
              <SectionTitle>서비스 설명</SectionTitle>
              <SectionText>{description}</SectionText>
            </Section>
            <Section>
              <SectionTitle>파일 형식</SectionTitle>
              <Tags values={["PDF"]} />
            </Section>
            <Section>
              <SectionTitle>서비스 평가</SectionTitle>
              <RatingBig value={4.9} count={974} />
              <ReviewList />
            </Section>
          </LeftModules>
          {/* 오른쪽 영역 */}
          <RightModules>
            <Title>
              <h1>전자책 부문 1위 '돈 버는 전자책 작성법 2021'을 드립니다.</h1>
              <Price>22,000원</Price>
            </Title>
            <PackagePanel>
              <PackageTitle>{title}</PackageTitle>
              <a href={`/order/${seq}`}><OrderButton>주문하기</OrderButton></a>
            </PackagePanel>
            <SellerProfile>
              <ProfilePicture src={ownerIcon} />
              <ProfileUserName>{owner}</ProfileUserName>
              <InquireButton>전문가에게 문의 남기기</InquireButton>
            </SellerProfile>
          </RightModules>
        </Content>
      </Container>
    </Background>
  );
}

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

export default DetailPage;

function Tags(props: { values: string[] }) {
  const Tags = styled.ul`
    display: flex;
  `;
  const Tag = styled.li`
    font-size: 13px;
    background: #F2F3F7;
    border-radius: 14px;
    padding: 0 10px;
    line-height: 30px;
  `;

  return (
    <Tags>
      {props.values.map((value, index) => (
        <Tag key={index}>{ value }</Tag>
      ))}
    </Tags>
  );
}

const Background = styled.div``;

const Container = styled.div`
  padding-top: 48px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 100%;
  border: 1px solid #E4E5ED;
  margin-bottom: 36px;
`;

const LeftModules = styled.div`
  width: calc(100% - 488px);
`;

const RightModules = styled.div`
  flex-basis: 436px;
  width: 436px;
  flex-shrink: 0;
  position: sticky;
  top: 0px;
`;

const Title = styled.div`
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  color: #303441;
  font-size: 18px;
`;

const Price = styled.h3`
  margin-bottom: 20px;
  text-align: right;
  margin-top: 8px;
`;

const PackagePanel = styled.div`
  border: 1px solid #e4e5ed;
  padding: 20px 30px;
  margin-bottom: 20px;
`;

const PackageTitle = styled.div`
  font-size: 14px;
`;

const OrderButton = styled.button`
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

const SellerProfile = styled.div`
  border: 1px solid #e4e5ed;
  padding: 32px;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: contain;
  border: 1px solid #EEEEEE;
  margin: 0 auto 16px;
`;

const ProfileUserName = styled.h1`
  font-size: 21px;
  line-height: 32px;
  color: #303441;
  text-align: center;
`;

const InquireButton = styled.button`
  background: #fff;
  margin-top: 24px;
  border: 1px solid #303441;
  color: #303441;
  height: 36px;
  padding: 0;
  width: 100%;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background: #f2f2f2;
  }
`;

const Section = styled.section`
  padding-bottom: 36px;
  border-bottom: 1px solid #e4e5ed;
  margin-bottom: 36px;
  &:last-child {
    border-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #303441;

  + * {
    margin-top: 10px;
  }
`;

const SectionText = styled.p`
  font-size: 13px;
  line-height: 21px;
`;