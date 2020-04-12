import React from 'react';
import './App.css';
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <Page1 />
        <br/>
        <Page2 />
        <br />
        <Page3 />
      </body>
    </div>
  );
}

export default App;
