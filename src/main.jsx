import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
import { HooksApp } from './HooksApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>,
)
