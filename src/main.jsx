import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { store } from './store'

import './style.css'
import { AppTheme } from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider
        store={ store }
      >
        <AppTheme>
          <App />
        </AppTheme>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
