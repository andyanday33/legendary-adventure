const path = require("path");

const withMDX = require("@next/mdx")({
  extension: /\.md?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withMDX({
  pageExtensions: ["tsx", "md"],
});
