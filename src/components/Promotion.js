function Promotion({image}) {
  return (
    <div className="h-[200px] md:h-auto">
        <img className="h-full object-cover md:h-auto md:w-full" src={image} alt={image}/>
    </div>
  )
}

export default Promotion;