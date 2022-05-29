var WooCommerceAPI = require('@woocommerce/woocommerce-rest-api').default;

if (process.env.NODE_ENV === 'production') {
    // Code will only appear in production build.
    var wooConfig = require('/wooCommerce.config');
} else {
    var wooConfig = require('/wooCommerceLocal.config');
}

// initialise the WooCommerceRestApi //
const api = new WooCommerceAPI({
  url: wooConfig.siteURL,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecrect,
  wpAPI: true,
  version: "wc/v3",
});

module.exports = api