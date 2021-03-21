import React from "react";

import styled from "@emotion/styled";
import { BookCard } from "./book-card";

interface IReviewListProps {
  data: any[];
}

export const BookCardList: React.FC<IReviewListProps> = ({ data }) => {
  return (
    <Container>
      {data.map((book) => (
        <BookCard key={book._id} seq={book.seq} title={book.bookTitle} price={book.price} img={book.bookImg} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  flex-wrap: wrap;
`;
