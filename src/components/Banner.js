import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className='relative'>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
            <div>
                <img loading="lazy" src="/images/products_banner.jpeg" alt="products_banner" />
            </div>
            <div>
                <img loading="lazy" src="/images/summer_time_banner.jpg" alt="summer_time_banner" />
            </div>
            <div>
                <img loading="lazy" src="/images/honor_banner.webp" alt="honor_banner" />
            </div>
        </Carousel>
    </div>
  )
}

export default Banner