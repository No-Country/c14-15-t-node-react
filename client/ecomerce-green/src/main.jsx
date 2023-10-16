import React from 'react'
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from "./redux/store.js";
import './index.css'
// import './style/Card.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
