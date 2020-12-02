import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
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
        <OpenSource id="open-source" {...openSource} />
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

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector('#root'),
);
