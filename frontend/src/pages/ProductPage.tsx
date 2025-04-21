//import React from 'react'

import { useEffect } from 'react'

const ProductPage = () => {
  useEffect(() => {
    document.title = 'Product Page'
  }, [])
  return <div>ProductPage</div>
}
export default ProductPage
