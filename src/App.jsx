import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Quotation } from '@atomikui/core';
import { Header, Hero } from './components';
import { AppProvider, AppContext } from './context';

const App = () => {
  const {
    content: {
      about,
      career,
      contact,
      corePrinciples,
      header,
      hero,
      footer,
      preface,
      socialMedia,
    },
  } = useContext(AppContext);

  return (
    <div className="layout">
      <div className="layout__header">
        <Header {...header} />
      </div>
      <main className="layout__main">
        <Hero {...hero} />
        <section>
          <Quotation pullquote>{preface}</Quotation>
        </section>
      </main>
      <div className="layout__footer" />
    </div>
  );
};

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#root'),
);
