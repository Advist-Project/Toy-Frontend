import styled from "@emotion/styled";
import { Banner } from "components/banner";
import { BookCardList } from "components/book-card-list";

function IndexPage() {
  return (
    <Background>
      <Banner />
      <Container>
        <Title>이달의 베스트셀러</Title>
        <BookCardList />
      </Container>
    </Background>
  );
}

export default IndexPage;

const Background = styled.div``;

const Container = styled.div`
  padding-top: 48px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
`;
