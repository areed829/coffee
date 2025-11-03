import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import './styles.scss';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

