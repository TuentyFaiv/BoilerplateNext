/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  },
  localePath: path.resolve("./public/locales"),
  ns: [
    "auth",
    "common",
    "header",
    "footer",
    "modal"
  ],
  reloadOnPrerender: process.env.NODE_ENV === "development"
};
