import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component'


const WomenPage = () => (
  <div>
<h1>WOMEN PAGE </h1>

  </div>
)


function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Women" component={WomenPage} />
      </switch>
    </div>
  );
  
}

export default App;




