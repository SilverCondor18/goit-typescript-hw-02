import React from 'react'
import { createRoot } from 'react-dom/client'
import 'modern-normalize'
import './index.css'
import App from './components/App/App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
