
module.exports = {
  "extends": "next/core-web-vitals",
  "plugins": ["css-in-js-lint"],
  "rules": {
    "css-in-js-lint/styled-component-use-theme-color": [1, {"rootCssFilePath": './styles/globals.css'}]
  }
}
