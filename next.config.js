const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], { target: "serverless" });

module.exports = {
  assets: {
    disableStaticImages: true,
  },
};
