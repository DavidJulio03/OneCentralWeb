import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OneCentralStore from './pages/Home/Home.jsx'
import "./styles/global.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OneCentralStore></OneCentralStore>
  </StrictMode>,
)
