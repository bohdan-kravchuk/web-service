import React from 'react';
import Routing from 'containers/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
    </Provider>
  );
};

export default App;
