/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import db from '../db.json';
import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Logo from '../src/components/Logo';
import Widget from '../src/components/Widget';
import Form from '../src/components/Form';
import GitHub from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  name, totalQuestions, questionIndex, question, onSubmit,
}) {
  const questionName = `question__${questionIndex}`;

  /* function handleChange(event) {
    const selected = event.target.value;
    if (selected === String(question.answer)) {
      console.log('acetou', event);
    } else {
      console.log('errou!');
    }
  } */

  return (
    <Widget>
      <Widget.Header>
        <h1>
          Pronto para testar seus conhecimentos,
          {' '}
          {name}
          ?
        </h1>
        <p>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </p>
      </Widget.Header>
      <Widget.Image
        alt="Descrição"
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <Form onSubmit={onSubmit}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;

            return (
              <Form.Alternative>
                <Form.Radio
                  name={questionName}
                  id={alternativeId}
                  type="radio"
                  value={alternativeIndex}
                />
                <Form.Label htmlFor={alternativeId}>
                  {alternative}
                </Form.Label>
              </Form.Alternative>
            );
          })}
          {/* CRIAR UMA VERIFICAÇÃO PARA O BOTÃO */}
          <Form.Button type="submit">Verificar</Form.Button>
        </Form>
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h2>Parabéns!!</h2>
      </Widget.Header>

      <Widget.Content>
        Em breve pontuação e muito mais.
      </Widget.Content>
    </Widget>
  );
}

function QuizPage() {
  const router = useRouter();
  const params = router.query;

  const [screenState, setScreenState] = useState(screenStates.LOADING);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  function handleSubmit(e) {
    e.preventDefault();
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Logo />
        {screenState === screenStates.LOADING && (
          <LoadingWidget />
        )}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            name={params.name}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            question={question}
            onSubmit={handleSubmit}
          />
        )}
        {screenState === screenStates.RESULT && (
          <ResultWidget />
        )}
        <Footer />
      </Container>
      <GitHub projectUrl="https://github.com/lucasbecker/hype-quiz" />
    </Background>
  );
}

export default QuizPage;
