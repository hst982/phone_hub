import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import DefaultStyle from './components/DefaultStyle'

createRoot(document.getElementById('root')!).render(
  <DefaultStyle>
    <StrictMode>
      <App />
    </StrictMode>
  </DefaultStyle>,
)
