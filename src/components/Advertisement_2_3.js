import Image from "next/image"

function Advertisement_2_3({image}) {
  return (
    <div className="flex-grow lg:flex-[2] h-[270px] relative">
        <Image src={image} alt={image} layout='fill' objectFit="cover" objectPosition="left" style={{borderRadius:'20px'}}/>
    </div>
  )
}

export default Advertisement_2_3