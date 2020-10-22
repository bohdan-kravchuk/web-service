import React from 'react';
import Routing from 'containers/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import ReduxToastr from 'react-redux-toastr';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routing />
        <ReduxToastr
          timeOut={3000}
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </Router>
    </Provider>
  );
};

export default App;
