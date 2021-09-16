
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Yako\\Documents\\Praximis Design\\Sites\\D-votech-PC\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Yako\\Documents\\Praximis Design\\Sites\\D-votech-PC\\src\\pages\\index.js")),
  "component---src-pages-services-js": preferDefault(require("C:\\Users\\Yako\\Documents\\Praximis Design\\Sites\\D-votech-PC\\src\\pages\\services.js"))
}

