/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Background from '../../components/Background';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import Widget from '../../components/Widget';
import BackLinkArrow from '../../components/BackLinkArrow';
import AlternativeForm from '../../components/AlternativeForm';
import GitHub from '../../components/GitHubCorner';
import Footer from '../../components/Footer';

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
  totalQuestions, questionIndex, question, onSubmit, addResult,
}) {
  const [selected, setSelected] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questionName = `question__${questionIndex}`;
  const isCorrect = selected === question.answer;
  const hasAlternativeSelected = selected !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h1>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h1>
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
        <AlternativeForm onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitted(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsSubmitted(false);
            setSelected(undefined);
          }, 2 * 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const selectedStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selected === alternativeIndex;
            return (
              <AlternativeForm.Alternative
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isSubmitted && selectedStatus}
              >
                <AlternativeForm.Radio
                  name={questionName}
                  id={alternativeId}
                  type="radio"
                  onChange={() => setSelected(alternativeIndex)}
                />
                {alternative}
              </AlternativeForm.Alternative>
            );
          })}
          {/* CRIAR UMA VERIFICAÇÃO PARA O BOTÃO */}
          <AlternativeForm.Button
            type="submit"
            disabled={!hasAlternativeSelected}
          >
            Confirmar
          </AlternativeForm.Button>
        </AlternativeForm>
      </Widget.Content>
    </Widget>
  );
}

function ResultWidget({ results, name = 'Fulano' }) {
  const success = results.reduce((totalCurrent, resultCurrent) => {
    const isSuccess = resultCurrent === true;
    if (isSuccess) return totalCurrent + 1;
    return totalCurrent;
  }, 0);
  const wrong = results.length - (results.length - success);
  const goodPerformance = success > results.length / 2;
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h2>{`Última parada do Trem do Hype, ${name}!`}</h2>
      </Widget.Header>

      <Widget.Content>
        {goodPerformance
          ? (<p>{`Você acetou ${success} perguntas, parabéns!`}</p>)
          : (<p>{`Infelizmente você acetou apenas ${wrong} perguntas. ):`}</p>)}

        <ul>
          {results.map((result, index) => {
            const resultIndex = `result__${index}`;
            return (
              <li key={resultIndex}>
                {`#${index + 1} Resultado: `}
                {result ? 'Acetou!' : 'Errou'}
              </li>
            );
          })}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuizPage({ externalQuestions, externalBg }) {
  const router = useRouter();
  const params = router.query;

  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const [questionIndex, setQuestionIndex] = useState(0);
  const totalQuestions = externalQuestions.length;
  const question = externalQuestions[questionIndex];

  function handleSubmit() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  return (
    <Background backgroundImage={externalBg}>
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
            addResult={addResult}
          />
        )}
        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} name={params.name} />
        )}
        <Footer />
      </Container>
      <GitHub projectUrl="https://github.com/lucasbecker/hype-quiz" />
    </Background>
  );
}

export default QuizPage;
