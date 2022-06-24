import React from 'react';
import './assets/style/global.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './routers/routes';

function App() {
  return (
    <Router>
      <Routers/>
    </Router>
  );
}

export default App;
