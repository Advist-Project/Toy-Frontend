import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import styled from "@emotion/styled";
import { Banner } from "components/banner";
import { BookCardList } from "components/book-card-list";

function IndexPage({books}: InferGetServerSidePropsType<typeof getServerSideProps>){
  console.log(books);

  return (
    <Background>
      <Banner />
      <Container>
        <Title>이달의 베스트셀러</Title>
        <BookCardList data={books} />
      </Container>
    </Background>
  );
}

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const req = await fetch('https://vjsel.herokuapp.com/book')
  const body = await req.json()

  if (!body) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: body,
  }
}

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
