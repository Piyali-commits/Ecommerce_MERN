import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { ProductStateType, ProductActionType, fetchProductDetailsReducer } from '../reducers/FetchProductDetails.reducer'
import { IProduct } from '../types/Product'

type IProps = {
  children: ReactNode
}
type ProductContextType = {
  productInfo: ProductStateType
  dispatch: Dispatch<ProductActionType>
}
const defaultValues: ProductContextType = {
  productInfo: {
    product: {} as IProduct,
    loading: false,
    error: '',
  },
  dispatch: () => null,
}
const INITIAL_STATE: ProductStateType = {
  product: {} as IProduct,
  loading: true,
  error: '',
}
const FetchProductDetailsContext = createContext(defaultValues)

export const FetchProductDetailsProvider = ({ children }: IProps) => {
  const [productInfo, dispatch] = useReducer(fetchProductDetailsReducer, INITIAL_STATE)
  return <FetchProductDetailsContext.Provider value={{ productInfo, dispatch }}>{children}</FetchProductDetailsContext.Provider>
}
export default FetchProductDetailsContext
