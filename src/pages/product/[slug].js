import Header from "../../components/Header";

function Product({product}) {
    console.log(product)
    return (
        <main>
            <Header />
            <h1>{product.title}</h1>
        </main>
    )
}

export default Product;

export const getStaticPaths = async () => {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      )

    const paths = products.map( product => ({
        params:{
            slug: product.id.toString()
        }
    }))

    return{
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params}) => {
    const product = await fetch(`https://fakestoreapi.com/products/${params?.slug}`).then(
        (res) => res.json()
      )

    if(!product){
        return {
            notFound:true
        }
    }

    return{
        props:{
            product          
        }
    }
}