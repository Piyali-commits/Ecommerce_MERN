import { Col, Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import FetchProductsContext from '../contexts/FetchProductsContext'
import { fetchProducts } from '../reducers/FetchProducts.reducer'

const HomePage = () => {
  const { productsInfo, dispatch } = React.useContext(FetchProductsContext)
  const { loading, products, error } = productsInfo

  useEffect(() => {
    document.title = 'Home Page'
    fetchProducts(dispatch)
  }, [dispatch])

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Container>
      <Row>
        {products &&
          products.length > 0 &&
          products.map((product: any) => (
            <Col key={product.slug} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default HomePage
