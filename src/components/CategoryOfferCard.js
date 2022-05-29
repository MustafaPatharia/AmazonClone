import Image from "next/image"

export default function CategoryOfferCard({id, category,percentage,image}) {
  return (
      <div className="bg-amazon_blue-alice p-5 relative flex flex-col m-4 rounded-xl">
        <h3 className="text-4xl sm:text-2xl lg:text-4xl">{category}</h3>
        <p className="text-3xl sm:text-xl lg:text-3xl">up to -<span className="font-bold">{percentage}%</span></p>
        <div className="flex justify-between mt-3">
          <p className="text-amazon_yellow-light link text-md">View all</p>
          <Image src={image} alt={image} width={250} height={200} objectFit="contain"  />
        </div>
      </div>
  )
}