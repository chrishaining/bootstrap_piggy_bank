import React from 'react';
import './App.css';
import Picture from './Picture'

function App() {
  return (
    <div class='container-fluid'>
      <header className="App-header">
        <div class='row'>
          <div id='a' class='col-sm-9'>
            <Picture/>
          </div>
          <div id='b' class='col-sm-3'>Take two</div>
        </div>
      </header>
    </div>
  );
}

export default App;
