//let counter = 0
function Rating(props: { rating: number; numReviews?: number }) {
  const { rating, numReviews } = props
  const result: any[] = []

  const showRating = () => {
    for (let counter = 1; counter <= 5; counter++) {
      result.push(
        <span key={counter}>
          <i
            className={
              rating >= counter
                ? 'fas fa-star'
                : rating >= counter - 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          />
        </span>
      )
    }
    return result
  }

  return (
    <div className="rating">
      {numReviews && numReviews > 0 ? (
        <>
          {showRating()}
          <span>{' ' + numReviews + ' reviews'}</span>{' '}
        </>
      ) : (
        <span>No Reviews yet!</span>
      )}
    </div>
  )
}

export default Rating
