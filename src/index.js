import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Nav from './components/Nav/Nav'
import Acsis from './components/Acsis/Acsis'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
      <Routes>

        <Route exact path="/" element={<App />}/>
        <Route path="/Acsis" element={<Acsis />}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);