import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './Routes.jsx'
import './main.css'

import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
