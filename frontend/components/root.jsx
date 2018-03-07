
import { HashRouter } from 'react-router-dom';
// import App from './App';
import React from 'react';
import {Provider} from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
    </HashRouter>
  </Provider>
);

export default Root;
