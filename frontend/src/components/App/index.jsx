import React from 'react';
import SignUp from '../../scenes/Auth/components/SignUp';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <SignUp />
    </Router>
  );
}

export default App;
