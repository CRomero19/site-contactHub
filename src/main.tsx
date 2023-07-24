import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Context/UserContext/userContext.tsx'
import HeaderProvider from './Context/HeaderContext/HeaderContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
        <UserProvider>
          <HeaderProvider>
            <App />
          </HeaderProvider>
        </UserProvider>
  </BrowserRouter>
</React.StrictMode>
)
