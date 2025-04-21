import React from 'react'
import Header from './components/Header'

import {
  BrowserRouter,
  Routes,
  Route,
  //RouterProvider,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'
//import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { FetchProductsProvider } from './contexts/ProductsContext.tsx'
//import { GlobalContext, initialState, productReducer } from './store/reducers/fetchProduct.reducer.ts'

//export const AppContext = (createContext < AppContextType) | (null > null);

//axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/'

function App() {
  return (
    <React.StrictMode>
      <ToastContainer hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover position="top-right" theme="colored" className="mt-16" />
      <FetchProductsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product/:slug" element={<ProductPage />} />
          </Routes>

          <footer>
            <div className="text-center">All right reserved</div>
          </footer>
        </BrowserRouter>
      </FetchProductsProvider>
    </React.StrictMode>
  )
}

export default App
