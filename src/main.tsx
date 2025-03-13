import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import MainLayout from './layouts/MainLayout'

createRoot(document.getElementById('root')!).render(
  <MainLayout>
    <StrictMode>
      <App />
    </StrictMode>
  </MainLayout>,
)
