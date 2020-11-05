/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Head from "next/head";
import { Provider as BumbagProvider, css, Flex } from "bumbag";
import { createGlobalStyle } from "styled-components";

import "@babel/polyfill";
import { useRouter } from "next/router";
import { getToken } from "utils";

const theme = {
  InputField: {
    defaultProps: {
      width: "100%",
      marginBottom: "20px",
    },
  },
  SelectMenu: {
    defaultProps: {
      width: "100%",
      marginBottom: "20px",
    },
  },
  global: {
    styles: {},
  },
};

interface Props {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
  const { pathname, push } = useRouter();
  return (
    <BumbagProvider theme={theme}>
      <Flex flexDirection="column">
        <Component {...pageProps} />
      </Flex>
    </BumbagProvider>
  );
}
