import Product from './Product'
import { shuffle } from 'lodash'
import { useEffect , useState } from 'react';


function ProductFeed({products, title}) {

  const [currentProducts, setCurrentProducts ] = useState(products)

  useEffect(() => {
    setCurrentProducts(shuffle(products).slice(0,4))
  }, [])

  return (
    <div className="xl:px-5">
      <div className='flex items-center justify-between mx-5 mt-12'>
        <h1 className='text-xl'>{title}</h1>
        <p className='text-sm text-amazon_yellow-light link'>View all</p>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4">
        {currentProducts.slice(0,4).map(({id, title, price, image, rating}) => (
          <Product key={id} title={title} price={price} image={image} rating={rating}/>
        ))}
      </div>
    </div>
  );
}

export default ProductFeed;