//import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IProduct } from '../types/Product'
import Rating from './Rating'

const ProductItem = ({ product }: { product: IProduct }) => {
  const { slug, image, name, rating, numReviews, price, countInStock } = product
  return (
    <Card>
      <Link to={`/product/${slug}`}>
        <img src={image} className="card-img-top" alt={name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${slug}`}>
          <Card.Title>{name}</Card.Title>
        </Link>

        <Rating rating={rating} numReviews={numReviews} />
        <Card.Text>${price}</Card.Text>
        {countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductItem
