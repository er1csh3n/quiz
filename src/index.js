import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReduxPromise from 'redux-promise';
import {applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer} from "./components/reducers/root.reducer";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); //created Redux store



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <App/>
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
