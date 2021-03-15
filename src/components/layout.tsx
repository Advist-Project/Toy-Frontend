import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { APP_NAME } from "common/constants";

interface ILayoutProps {
  title: string;
}

export const Layout: React.FC<ILayoutProps> = ({ children, title }) => {
  return (
    <Container>
      <Head>
        <title>
          {title} | {APP_NAME}
        </title>
      </Head>
      <Children>{children}</Children>
    </Container>
  );
};

const Container = styled.div``;

const Children = styled.div``;
