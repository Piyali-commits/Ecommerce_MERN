import { IProduct } from '../types/Product'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getError } from '../utils/getError'
import { ApiError } from '../types/ApiError'
import { ProductsContants } from '../Constants'

export type ProductStateType = {
  products: IProduct[]
  loading: boolean
  error: string
}
export type ProductActionType = {
  type: ProductsContants
  payload?: any
}

type ProductDispatchType = (value: ProductActionType) => void

export const productReducer = (state: ProductStateType, action: ProductActionType) => {
  switch (action.type) {
    case ProductsContants.PRODUCT_FETCH_REQUEST:
      return { ...state, loading: true }
    case ProductsContants.PRODUCT_FETCH_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case ProductsContants.PRODUCT_FETCH_FAILED:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const fetchProductsData = async (dispatch: ProductDispatchType) => {
  dispatch({ type: ProductsContants.PRODUCT_FETCH_REQUEST })
  try {
    const result = await axios.get('http://localhost:4000/api/products')
    dispatch({ type: ProductsContants.PRODUCT_FETCH_SUCCESS, payload: result.data })
    toast.success('Success', { autoClose: 3000 })
  } catch (err) {
    dispatch({
      type: ProductsContants.PRODUCT_FETCH_FAILED,
      payload: getError(err as ApiError),
    })
  }
}
