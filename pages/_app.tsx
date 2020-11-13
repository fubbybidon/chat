/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Head from "next/head";
import { Provider as BumbagProvider, css, Flex } from "bumbag";
import { createGlobalStyle } from "styled-components";

import "@babel/polyfill";
import { useRouter } from "next/router";
import { getToken } from "utils";

const theme = {
  rtk: {
    primary: "rgb(119, 0, 255)",
    secondary: "#ff4f12",
  },
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
    styles: {
      base: css`
        @font-face {
          font-family: "RT Fonts";
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.eot");
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.eot?#iefix")
              format("embedded-opentype"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.woff2")
              format("woff2"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.woff")
              format("woff"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.ttf")
              format("ttf");
          font-style: normal;
          font-weight: 200;
        }
        @font-face {
          font-family: "RT Fonts";
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.eot");
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.eot?#iefix")
              format("embedded-opentype"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.woff2")
              format("woff2"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.woff")
              format("woff"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Light-Web.ttf")
              format("ttf");
          font-style: normal;
          font-weight: 300;
        }
        @font-face {
          font-family: "RT Fonts";
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Regular-Web.eot");
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Regular-Web.eot?#iefix")
              format("embedded-opentype"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Regular-Web.woff2")
              format("woff2"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Regular-Web.woff")
              format("woff"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Regular-Web.ttf")
              format("ttf");
          font-style: normal;
          font-weight: 400;
        }
        @font-face {
          font-family: "RT Fonts";
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Medium-Web.eot");
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Medium-Web.eot?#iefix")
              format("embedded-opentype"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Medium-Web.woff2")
              format("woff2"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Medium-Web.woff")
              format("woff"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Medium-Web.ttf")
              format("ttf");
          font-style: normal;
          font-weight: 500;
        }
        @font-face {
          font-family: "RT Fonts";
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.eot");
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.eot?#iefix")
              format("embedded-opentype"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.woff2")
              format("woff2"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.woff")
              format("woff"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.ttf")
              format("ttf");
          font-style: normal;
          font-weight: 600;
        }
        @font-face {
          font-family: "RT Fonts";
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.eot");
          src: url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.eot?#iefix")
              format("embedded-opentype"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.woff2")
              format("woff2"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.woff")
              format("woff"),
            url("https://static-cdn.rt.ru/themes/rt_ru/fonts/BasisGrotesquePro-Bold-Web.ttf")
              format("ttf");
          font-style: normal;
          font-weight: 800;
        }
        body {
          font-family: RT Fonts, Arial, Helvetica Neue, Helvetica, sans-serif;
          line-height: 1.5;
        }
      `,
    },
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
