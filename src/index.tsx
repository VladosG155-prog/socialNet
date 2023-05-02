import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';

import WelcomePage from './pages/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
