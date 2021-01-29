/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function OtherQuiz({ dbExternal }) {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen externalQuestions={dbExternal.questions} externalBg={dbExternal.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const dbExternal = await fetch(`https://${id}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Deu ruim na requisição dos dados!');
    })
    .then((responseJSON) => responseJSON)
    .catch((err) => console.error(err));

  return {
    props: {
      dbExternal,
    },
  };
}
