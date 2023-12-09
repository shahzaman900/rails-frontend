import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Greeting from './components/Greeting';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/greeting" component={Greeting} />
        <Route path="/" component={Home} />
      </Routes>
    </div>
  </Router>
);

export default App;
