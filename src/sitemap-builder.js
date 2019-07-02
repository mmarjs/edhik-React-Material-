require("babel-register")({
  presets: ["es2015", "react"]
});
require.extensions[(".css", ".styl")] = function() {
  return null;
};

const router = require("./App").default;
const Sitemap = require("react-router-sitemap").default;
function generateSitemap() {
  return new Sitemap(router)
    .build("http://edhik.com")
    .save("./public/sitemap.xml");
}

generateSitemap();
