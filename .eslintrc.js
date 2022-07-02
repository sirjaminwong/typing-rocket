
const fs = require('fs');

const globalsStyles = fs.readFileSync('./styles/globals.css').toString();
const regexCssVariable = /--[^\;]+/g;
const entries = globalsStyles.match(regexCssVariable).map(item => item.split(":").map(item => item.trim()))
const variableMap = Object.fromEntries(entries);


module.exports = {
  "extends": "next/core-web-vitals",
  "plugins": ["css-in-js-lint"],
  "rules": {
    "css-in-js-lint/styled-component-use-theme-color": [1, {"rootPath": '', variableMap}]
  }
}
