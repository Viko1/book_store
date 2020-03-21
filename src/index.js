import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import 'semantic-ui-css/semantic.min.css'

import createStore from './store';
const store = createStore();


ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    document.getElementById('root'));

