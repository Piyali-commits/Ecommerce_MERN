import { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { ProductStateType, ProductActionType, fetchProductsReducer } from '../reducers/FetchProducts.reducer'

type Props = {
  children: ReactNode
}
type ProductsContextType = {
  productsInfo: ProductStateType
  dispatch: Dispatch<ProductActionType>
}
const defaultValues: ProductsContextType = {
  productsInfo: {
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
const FetchProductsContext = createContext(defaultValues)

export const FetchProductsProvider = ({ children }: Props) => {
  const [productsInfo, dispatch] = useReducer(fetchProductsReducer, INITIAL_STATE)
  return <FetchProductsContext.Provider value={{ productsInfo, dispatch }}>{children}</FetchProductsContext.Provider>
}
export default FetchProductsContext
