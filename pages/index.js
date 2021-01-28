import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Logo from '../src/components/Logo';
import Widget from '../src/components/Widget';
import Form from '../src/components/Form';
import Footer from '../src/components/Footer';
import GitHub from '../src/components/GitHubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState();

  function handleSubmit(event) {
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
              {db.title}
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Form
              onSubmit={handleSubmit}
            >
              <Form.Input
                placeholder="Informe seu nome"
                onChange={(e) => setName(e.target.value)}
                name="nome"
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
