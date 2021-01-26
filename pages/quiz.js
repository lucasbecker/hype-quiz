import React from 'react';

import { useRouter } from 'next/router';

import db from '../db.json';
import Background from '../src/components/QuizBackground';
import Container from '../src/components/QuizContainer';
import Logo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';

function QuizPage() {
  const router = useRouter();
  const params = router.query;

  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Logo />
        <Widget>
          <Widget.Header>
            <h1>
              Pronto para testar seus conhecimentos,
              {' '}
              {params.name}
              ?
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Infelizmente o questionário ainda não está pronto.
              Aguarde mais um pouco, em breve o questionário completo estará aqui.
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </Container>
    </Background>
  );
}

export default QuizPage;
