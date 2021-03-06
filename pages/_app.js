import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hype-Quiz</title>
        <meta name="title" content="Hype-Quiz" />
        <meta name="description" content="Embarque no trem do hype e teste seus conhecimentos sobre JavaScript e outros temas." />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,900&display=swap" rel="stylesheet" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hype-quiz.lucasbecker.vercel.app/" />
        <meta property="og:title" content="Hype-Quiz" />
        <meta property="og:description" content="Embarque no trem do hype e teste seus conhecimentos sobre JavaScript e outros temas." />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hype-quiz.lucasbecker.vercel.app/" />
        <meta property="twitter:title" content="Hype-Quiz" />
        <meta property="twitter:description" content="Embarque no trem do hype e teste seus conhecimentos sobre JavaScript e outros temas." />
        <meta property="twitter:image" content={db.bg} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
