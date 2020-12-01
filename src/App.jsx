import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Quotation } from '@atomikui/core';
import { Header } from './components';
import { Hero, About } from './sections';
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
        <Hero id="top" {...hero} />
        <section>
          <Quotation pullquote>{preface}</Quotation>
        </section>
        <About id="about" {...about} />
      </main>
      <div className="layout__footer">
        <footer>
          &copy; {new Date().getFullYear()} Alan Eicker. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#root'),
);
