import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes.jsx';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles.js';
import theme from './Styles/Theme.js';
import { VideoProvider } from './Contexts/VideoContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <VideoProvider>
        <AppRoutes />
      </VideoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
