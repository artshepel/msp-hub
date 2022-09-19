import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='test' element={<div>Test route</div>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
