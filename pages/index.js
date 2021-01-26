import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Background from '../src/components/QuizBackground';
import Container from '../src/components/QuizContainer';
import Logo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Form from '../src/components/Form';
import Footer from '../src/components/Footer';
import GitHub from '../src/components/GitHubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState();

  function handlerSubmit(event) {
    event.preventDefault();
    router.push(`/quiz/?name=${name}`);
  }

  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Logo />
        <Widget>
          <Widget.Header>
            <h1>
              O Trem do Hype JavaScript
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Embarque no trem do hypes e teste seus conhecimentos
              sobre os fundamentos do JavaScript.
            </p>
            <Form
              onSubmit={handlerSubmit}
            >
              <Form.Input
                placeholder="Informe seu nome"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Button
                type="submit"
                disabled={!name}
              >
                Jogar
              </Form.Button>
            </Form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h2>
              Em Breve!
            </h2>
            <p>Outros questionários desenvolvidos pela comunidade.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </Container>
      <GitHub projectUrl="https://github.com/lucasbecker/hype-quiz" />
    </Background>
  );
}
