// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // enables static HTML export
  trailingSlash: true,
  basePath: isProd ? "/frondesk-new-website" : "",
  assetPrefix: isProd ? "/frondesk-new-website/" : "",
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Image Optimization
  }
};
