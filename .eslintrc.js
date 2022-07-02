
const fs = require('fs');

const globalsStyles = fs.readFileSync('./styles/globals.css');
 console.log(globalsStyles.toString())

module.exports = {
  "extends": "next/core-web-vitals",
  "plugins": ["css-in-js-lint"],
  "rules": {
    "css-in-js-lint/styled-component-use-theme-color": [1, {"rootPath": "./styles/globals.css"}]
  }
}
