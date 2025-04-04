import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SwipeContextProvider } from '../contexts/swipeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SwipeContextProvider>
    <App />
  </SwipeContextProvider>
);

// <React.StrictMode>
// </React.StrictMode>
