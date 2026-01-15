import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OneCentralStore from './app'
import "../styles/global.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OneCentralStore></OneCentralStore>
  </StrictMode>,
)
