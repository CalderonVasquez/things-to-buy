import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { name: "Eat", id: "todo-0", completed: true },
  { name: "Sleep", id: "todo-1", completed: false },
  { name: "Pray", id: "todo-2", completed: false },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
)
