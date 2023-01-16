import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1F1F28'
    }
  },
  typography: {
    h2: {
      "@media(max-width: 900px)": {
        fontSize: '48px',
      },
      "@media(max-width: 600px)": {
        fontSize: '32px',
      },

    },
    h4: {
      "@media(max-width: 900px)": {
        fontSize: '32px',
      },
      "@media(max-width: 600px)": {
        fontSize: '28px',

      },
    },
    h5: {
      "@media(max-width: 900px)": {
        fontSize: '22px',
      },
      "@media(max-width: 600px)": {
        fontSize: '20px',

      },
    },
    h6: {
      "@media(max-width: 900px)": {
        fontSize: '18px',
      },
      "@media(max-width: 600px)": {
        fontSize: '16px',

      },
    },
  },

});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>
);


