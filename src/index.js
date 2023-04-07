import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from './Page1'
import ClockPage from './ClockPage';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path= "/" component={Page1}/>
      <Route exact path= "/ClockPage" component={ClockPage}/>
    </Routes>
  </BrowserRouter>
    ,
    root
    
    
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
