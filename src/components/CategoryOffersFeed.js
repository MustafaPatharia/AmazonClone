import CategoryOfferCard from './CategoryOfferCard'

const offers = [
  {
    id: 1,
    category: 'Camera & Photo', 
    percentage: 20,
    image: '/images/camera_offer.png'
  },
  {
    id:2,
    category: 'Video Games', 
    percentage: 10,
    image: '/images/PS5_controller_offer.png'
  },
  {
    id:3,
    category: 'Books', 
    percentage: 15,
    image: '/images/books_offer.png'
  }
]

function CategoryOffersFeed() {
  return (
    <div className="xl:px-5 mt-8">
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3">
        {offers.map(({id, category,percentage,image})=> (
          <CategoryOfferCard key={id} category={category} percentage={percentage} image={image} />
        ))}
      </div>
    </div>
  )
}

export default CategoryOffersFeed