import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components';
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
      <div className="layout__body">
        <main className="layout__main" />
        <aside className="layout__sidebar" />
      </div>
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
