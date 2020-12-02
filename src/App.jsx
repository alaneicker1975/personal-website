import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from '@atomikui/core';
import { Header, Footer, ContactInfo, SocialMedia } from './components';
import { Hero, About, Principles, Career, OpenSource } from './sections';
import { AppProvider, AppContext } from './context';

const App = () => {
  const {
    content: {
      about,
      career,
      contact,
      principles,
      header,
      hero,
      footer,
      preface,
      openSource,
      socialMedia,
    },
  } = useContext(AppContext);

  return (
    <div className="layout">
      <div className="layout__header">
        <Header {...header} />
      </div>
      <main className="layout__main">
        <Hero id="top" {...hero} />
        <About id="about" {...{ preface, ...about }} />
        <Principles id="principles" {...principles} />
        <Career id="career" {...career} />
        <OpenSource id="projects" {...openSource} />
        <div className="layout__footer">
          <Footer copyrightText={footer.copyrightText}>
            <ContactInfo {...contact} />
            <SocialMedia {...socialMedia} />
          </Footer>
        </div>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM[rootElement.hasChildNodes() ? 'hydrate' : 'render'](
  <AppProvider>
    <Portal container={document.head}>
      <>
        {[
          '57x57',
          '60x60',
          '72x72',
          '76x76',
          '114x114',
          '120x120',
          '144x144',
          '180x180',
        ].map((size) => (
          <link
            key={`icon-${size}`}
            rel="apple-touch-icon"
            sizes={size}
            href={`static/images/apple-icon-${size}.png`}
          />
        ))}
        <link rel="icon" type="image/x-icon" href="static/images/favicon.ico" />
        <link rel="manifest" href="static/manifest.json" />
      </>
    </Portal>
    <App />
  </AppProvider>,
  document.querySelector('#root'),
);
