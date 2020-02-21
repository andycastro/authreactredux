import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import store from './store';
import Routes from './pages/routes';

const App = () => (
  <Provider store={store}>
    <ReduxToastr />
    <Routes />
  </Provider>
);

export default App;
