const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], { target: "serverless" });

// module.exports = {
//   images: {
//     disableStaticImages: true,
//   },
// };

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: "file-loader",
//           },
//         ],
//       },
//     ],
//   },
// };

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };
