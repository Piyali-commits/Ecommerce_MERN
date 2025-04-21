import { Col, Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import ProductsContext from '../contexts/ProductsContext'
import { fetchProductsData } from '../reducers/Product.reducer'

const HomePage = () => {
  const { productInfo, dispatch } = React.useContext(ProductsContext)
  useEffect(() => {
    document.title = 'Home Page'
    fetchProductsData(dispatch)
  }, [dispatch])

  return productInfo.loading ? (
    <LoadingBox />
  ) : productInfo.error ? (
    <MessageBox variant="danger">{productInfo.error}</MessageBox>
  ) : (
    <Container>
      <Row>
        {productInfo.products &&
          productInfo.products.length > 0 &&
          productInfo.products.map((product: any) => (
            <Col key={product.slug} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default HomePage
