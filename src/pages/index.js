import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import ProductAdvertisement from "../components/ProductAdvertisement";
import Promotion from "../components/Promotion";
import CategoryOffersFeed from "../components/CategoryOffersFeed";

export default function Home({products}) {
  console.log(products[2])
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

var WooCommerceAPI = require('@woocommerce/woocommerce-rest-api').default;
var wooConfig = require('../../woocommerce.config');

// initialise the WooCommerceRestApi //
// NOTE: must execute these API calls server-side because env vars only available there and it is more secure
const WooCommerce = new WooCommerceAPI({
  url: wooConfig.siteURL,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecrect,
  wpAPI: true,
  version: "wc/v3",
});

// create new WooCommerce order by passing in required data object //
// export async function createWooCommerceOrder() {
//   try {
//     const response = await api.get("product");
//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

export async function getServerSideProps(context){
  var products = null;
  
  await WooCommerce.get("products")
  .then((response) => {
    products = response.data
  } )
  .catch((error) => {
    console.log(error.response.data);
  });

  products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  return{
    props: {
      products,
    }
  }
}