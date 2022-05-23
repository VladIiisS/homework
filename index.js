import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

   const elem = (
     <div>
       <h2> HELLO MEN! </h2>
         <input type = "text"/>
           <button>GO!</button>
     </div>
   );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
  <React.StrictMode>
    <App />
  </React.StrictMode>
   
);


//eportWebVitals();
