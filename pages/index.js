import Head from 'next/head'

import db from '../db.json';

import Background from '../src/components/QuizBackground';
import Container from '../src/components/QuizContainer';
import Logo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHub from '../src/components/GitHubCorner';

export default function Home() {
  return (
    <>
    <Head>
      <title>Hype-Quiz - JavaScript</title>
      <meta name="title" content="Hype-Quiz - JavaScript" />
      <meta name="description" content="Embarque no trem do hype do JavaScript e teste seus conhecimentos." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hype-quiz.lucasbecker.vercel.app/" />
      <meta property="og:title" content="Hype-Quiz - JavaScript" />
      <meta property="og:description" content="Embarque no trem do hype do JavaScript e teste seus conhecimentos." />
      <meta property="og:image" content={db.bg} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hype-quiz.lucasbecker.vercel.app/" />
      <meta property="twitter:title" content="Hype-Quiz - JavaScript" />
      <meta property="twitter:description" content="Embarque no trem do hype do JavaScript e teste seus conhecimentos." />
      <meta property="twitter:image" content={db.bg} />
    </Head>
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
              Em breve um questionário sobre JavaScript e os fundamentos que todos devem saber.
            </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h2>Em Breve!</h2>
            <p>Outros questionários desenvolvidos pela comunidade.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </Container>
      <GitHub projectUrl="https://github.com/lucasbecker/hype-quiz" />
    </Background>
    </>
  )
}
