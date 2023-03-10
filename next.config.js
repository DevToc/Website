const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  images: {
    domains: ["dl.airtable.com", "v5.airtableusercontent.com"],
  },
});
