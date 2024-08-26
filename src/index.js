import React from 'react';
import ReactDOM from 'react-dom/client';
import './Footer.css';
import './Main.css';
import './Taptap.css'
import Footer from './Footer';
import Taptap from './Taptap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Taptap />
    <Footer />
  </React.StrictMode>
);