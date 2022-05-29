import Image from "next/image"

function Advertisement_1_3({image}) {
  return (
    <div className="lg:flex-1 h-[270px] relative">
        <Image src={image} alt={image} layout='fill' objectFit="cover" style={{borderRadius:'20px'}}/>
    </div>
  )
}

export default Advertisement_1_3