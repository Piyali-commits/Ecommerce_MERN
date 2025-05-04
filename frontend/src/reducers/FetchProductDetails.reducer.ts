import { IProduct } from '../types/Product'
import apiClient from '../utils/apiClient'
//import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getError } from '../utils/getError'
import { ApiError } from '../types/ApiError'
import { ProductsConstants } from '../Constants'

export type ProductStateType = {
  product: IProduct
  loading: boolean
  error: string
}
export type ProductActionType = {
  type: ProductsConstants
  payload?: any
}

type ProductDispatchType = (value: ProductActionType) => void

export const fetchProductDetailsReducer = (state: ProductStateType, action: ProductActionType) => {
  switch (action.type) {
    case ProductsConstants.PRODUCT_DETAILS_FETCH_REQUEST:
      return { ...state, loading: true }
    case ProductsConstants.PRODUCT_DETAILS_FETCH_SUCCESS:
      return { ...state, loading: false, product: action.payload }
    case ProductsConstants.PRODUCT_DETAILS_FETCH_FAILED:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
export const fetchProductDetails = async (dispatch: ProductDispatchType, slug: any) => {
  dispatch({ type: ProductsConstants.PRODUCT_DETAILS_FETCH_REQUEST })
  try {
    const result = await apiClient.get(`/api/products/product/${slug}`)
    dispatch({ type: ProductsConstants.PRODUCT_DETAILS_FETCH_SUCCESS, payload: result.data })
    //toast.success('Success', { autoClose: 3000 })
  } catch (err) {
    dispatch({
      type: ProductsConstants.PRODUCT_DETAILS_FETCH_FAILED,
      payload: getError(err as ApiError),
    })
  }
}
