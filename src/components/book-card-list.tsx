import React from "react";

import styled from "@emotion/styled";
import { BookCard } from "./book-card";

export const BookCardList = () => {
  return (
    <Container>
      {new Array(5).fill(0).map((_, index) => (
        <BookCard key={index} idx={index} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;
