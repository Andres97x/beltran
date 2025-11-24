import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { SwipeContextProvider } from '../contexts/swipeContext.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <SwipeContextProvider>
      <App />
    </SwipeContextProvider>
  </BrowserRouter>
);
