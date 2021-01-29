import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../../../db.json';
import Background from '../../components/Background';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import Widget from '../../components/Widget';
import Form from '../../components/Form';
import AlternativeForm from '../../components/AlternativeForm';
import Link from '../../components/Link';
import Footer from '../../components/Footer';
import GitHub from '../../components/GitHubCorner';

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
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
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
        <Widget
          as={motion.section}
          transition={{ delay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h2>
              Outros trens para embarcar!
            </h2>
            <ul>
              {db.external.map((link) => {
                const [projectName, githubUser] = link.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');
                return (
                  <li key={link}>
                    <AlternativeForm.Alternative as={Link} href={`/quiz/${projectName}.${githubUser}`}>
                      {`${githubUser}/${projectName}`}
                    </AlternativeForm.Alternative>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 1.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </Container>
      <GitHub projectUrl="https://github.com/lucasbecker/hype-quiz" />
    </Background>
  );
}
