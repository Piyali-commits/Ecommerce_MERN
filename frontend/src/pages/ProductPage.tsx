import { useContext, useEffect } from 'react'
import { fetchProductDetails } from '../reducers/FetchProductDetails.reducer'
import FetchProductDetailsContext from '../contexts/FetchProductDetailsContext'
import { useParams } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductPage = () => {
  const { slug } = useParams()
  const { productInfo, dispatch } = useContext(FetchProductDetailsContext)
  const { loading, product, error } = productInfo

  useEffect(() => {
    if (dispatch && slug) fetchProductDetails(dispatch, slug)
  }, [dispatch, slug])

  useEffect(() => {
    document.title = 'Product Page'
  }, [])

  console.log(' Hello ', product)
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Container>
      <Row>
        <Col md={6}>
          <img className="large" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock > 0 ? <Badge bg="success">In Stock</Badge> : <Badge bg="danger">Unavailable</Badge>}</Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default ProductPage
