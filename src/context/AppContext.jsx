import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import content from '../content.yaml';

const AppContext = createContext({});

const AppProvider = ({ children }) => (
  <AppContext.Provider value={{ content }}>{children}</AppContext.Provider>
);

AppProvider.propTypes = {
  children: PropTypes.node,
};

AppProvider.defaultProps = {
  children: null,
};

export { AppProvider, AppContext };
