import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ContextProvider } from './context/Context'
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
       <App />
      </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
