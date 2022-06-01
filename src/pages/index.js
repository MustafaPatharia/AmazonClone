import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import ProductAdvertisement from "../components/ProductAdvertisement";
import Promotion from "../components/Promotion";
import CategoryOffersFeed from "../components/CategoryOffersFeed";

export default function Home({products}) {
  return (
    <div>
      <Head>
      <link rel="shortcut icon" href="/amazon.ico" />
        <title>Amazon 2.0</title>
      </Head>
      
      <Header />
      
      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} title={"Related items you've viewed"}/>

        <ProductAdvertisement />

        <ProductFeed products={products} title={"Inspired by your shopping trends"}/>

        <Promotion image="/images/amz_basics.jpg"/>
        
        <ProductFeed products={products} title={"Amazon Devices"}/>

        <Promotion image="/images/razer_promo.jpg"/>
        
        <CategoryOffersFeed />
        
        <ProductFeed products={products} title={"Your browsing history"}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){

  // FakeStore server side props
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  return{
    props: {
      products,
    }
  }
}