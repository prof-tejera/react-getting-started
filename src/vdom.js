import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

var counter = 0;

const update = () => {
  const element = (
    <div>
      <input type="text"></input>
      <div>
        <b>Counter: {counter++}</b>
      </div>
    </div>
  );
  // console.log(element);
  root.render(element);
};

setInterval(update, 1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
