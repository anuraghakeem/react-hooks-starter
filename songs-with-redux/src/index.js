import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axe from 'react-axe';

import App from './components/App';
import reducers from './reducers';

if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, 1000);
  }

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>, 
document.getElementById('root'));

