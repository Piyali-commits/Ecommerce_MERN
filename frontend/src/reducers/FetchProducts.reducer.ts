import { IProduct } from '../types/Product'
import apiClient from '../utils/apiClient'
//import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getError } from '../utils/getError'
import { ApiError } from '../types/ApiError'
import { ProductsConstants } from '../Constants'

export type ProductStateType = {
  products: IProduct[]
  loading: boolean
  error: string
}
export type ProductActionType = {
  type: ProductsConstants
  payload?: any
}

type ProductDispatchType = (value: ProductActionType) => void

export const fetchProductsReducer = (state: ProductStateType, action: ProductActionType) => {
  switch (action.type) {
    case ProductsConstants.PRODUCTS_FETCH_REQUEST:
      return { ...state, loading: true }
    case ProductsConstants.PRODUCTS_FETCH_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case ProductsConstants.PRODUCTS_FETCH_FAILED:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const fetchProducts = async (dispatch: ProductDispatchType) => {
  dispatch({ type: ProductsConstants.PRODUCTS_FETCH_REQUEST })
  try {
    const result = await apiClient.get('/api/products')
    dispatch({ type: ProductsConstants.PRODUCTS_FETCH_SUCCESS, payload: result.data })
    //toast.success('Success', { autoClose: 3000 })
  } catch (err) {
    dispatch({
      type: ProductsConstants.PRODUCTS_FETCH_FAILED,
      payload: getError(err as ApiError),
    })
  }
}
