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
      <title>Quiz - O Trem do Hype JS</title>
      <meta property="og:image" content={db.bg} />
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
      <GitHub projectUrl="https://github.com/lucasbecker/quiz" />
    </Background>
    </>
  )
}
