import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from "./app/Store"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios"

axios.defaults.withCredentials= true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
