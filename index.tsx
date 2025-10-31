import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Servicios from './components/Servicios';
import Productos from './components/Productos';
import TranscendenceSlides from './components/TranscendenceSlides';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/trascendencia" element={<TranscendenceSlides />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
