import Advertisement_2_3 from "./Advertisement_2_3"
import Advertisement_1_3 from "./Advertisement_1_3"

function ProductAdvertisement() {
  return (
      <div className="flex mx-4 lg:mx-8 lg:space-x-8">
          <Advertisement_2_3 image="/images/apple_watch.jpg" />
          <Advertisement_1_3 image="/images/airpods.jpg" />
      </div>
  )
}

export default ProductAdvertisement