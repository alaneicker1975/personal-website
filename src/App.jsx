import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components';
import { Hero, About, Principles, Career } from './sections';
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
        <footer className="layout__footer">
          &copy; {new Date().getFullYear()} {footer.copyrightText}.
        </footer>
      </main>
    </div>
  );
};

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#root'),
);
