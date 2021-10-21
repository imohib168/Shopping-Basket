import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';

import { store, persistor } from './Store/store';
import { Provider } from 'react-redux';

import { persistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <persistGate persistor={persistor}>
            <App />
        </persistGate>
    </Provider>,
    document.getElementById('root')
)