// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Homepage from './client/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './client/Redux/store'; // Corrected import path
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/app' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
