import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MercuryStoreApp } from './MercuryStoreApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MercuryStoreApp />
  </StrictMode>,
)
