import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './styles/global-styles';
import menuReducer from './features/menu';
import { theme } from './styles/theme';
import App from './App.jsx';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
       <App/>
       <GlobalStyles />
       </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


