import React from 'react';
import ReactDOM from 'react-dom';

import Hello from "./Hello";
function App() {
  return (
   <div style={{ backgroundColor: '#46B1DE' }} className="wrapper">
    <Hello></Hello>
   <button onClick={() => console.log('Click on button')}>Button</button>
    </div>
    );
}
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
