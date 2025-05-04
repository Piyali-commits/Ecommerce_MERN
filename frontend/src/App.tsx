import React from 'react'
import Header from './components/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import { ToastContainer } from 'react-toastify'
import { FetchProductsProvider } from './contexts/FetchProductsContext.tsx'
import { FetchProductDetailsProvider } from './contexts/FetchProductDetailsContext.tsx'
import { SwitchThemeProvider } from './contexts/SwitchThemeContext.tsx'

function App() {
  return (
    <React.Fragment>
      <ToastContainer hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover position="top-right" theme="colored" className="mt-16" />
      <SwitchThemeProvider>
        <FetchProductsProvider>
          <FetchProductDetailsProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:slug" element={<ProductPage />} />
              </Routes>
              <footer>
                <div className="text-center">All right reserved</div>
              </footer>
            </BrowserRouter>
          </FetchProductDetailsProvider>
        </FetchProductsProvider>
      </SwitchThemeProvider>
    </React.Fragment>
  )
}

export default App
