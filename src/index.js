import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
// import { GoogleOAuthProvider } from 'react-oauth/google';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
reportWebVitals();

// ReactDOM.render(
//   <GoogleOAuthProvider
//     clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
//     onScriptLoadError={() => console.log('실패')}
//     onScriptLoadSuccess={() => console.log('성공')}
//   >
//     <App />
//   </GoogleOAuthProvider>,
//   document.getElementById('root'),
// );
