import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { ProductStateType, ProductActionType, productReducer } from '../reducers/Product.reducer'

type IProps = {
  children: ReactNode
}
type ProductsContextType = {
  productInfo: ProductStateType
  dispatch: Dispatch<ProductActionType>
}
const defaultValues: ProductsContextType = {
  productInfo: {
    products: [],
    loading: false,
    error: '',
  },
  dispatch: () => null,
}
const INITIAL_STATE: ProductStateType = {
  products: [],
  loading: true,
  error: '',
}
const ProductsContext = createContext(defaultValues)

export const FetchProductsProvider = ({ children }: IProps) => {
  const [productInfo, dispatch] = useReducer(productReducer, INITIAL_STATE)
  return <ProductsContext.Provider value={{ productInfo, dispatch }}>{children}</ProductsContext.Provider>
}
export default ProductsContext
