var WooCommerceAPI = require('@woocommerce/woocommerce-rest-api').default;
var wooConfig = require('../woocommerce.config');

// initialise the WooCommerceRestApi //
// NOTE: must execute these API calls server-side because env vars only available there and it is more secure
const api = new WooCommerceAPI({
  url: wooConfig.siteURL,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecrect,
  wpAPI: true,
  version: "wc/v3",
});

// create new WooCommerce order by passing in required data object //
export async function createWooCommerceOrder() {
  try {
    const response = await api.get("product", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}