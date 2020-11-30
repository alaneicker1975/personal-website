import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext({});

const AppProvider = ({ children }) => (
  <AppContext.Provider>{children}</AppContext.Provider>
);

AppProvider.propTypes = {
  children: PropTypes.node,
};

AppProvider.defaultProps = {
  children: null,
};

export { AppProvider, AppContext };
