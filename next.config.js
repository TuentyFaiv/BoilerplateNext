/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require("./next-18next.config");

const config = {
  reactStrictMode: true,
  i18n,
  compress: true,
  compiler: {
    styledComponents: true
  }
};

module.exports = config;
