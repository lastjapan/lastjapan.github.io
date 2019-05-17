// Define Dependencies
var detect = require('./lib/detect');
var unslider = require('./lib/unslider');
var fotorama = require('./lib/fotorama')
var draggable = require('./modules/draggable');
var waypoints = require('./lib/waypoints');
// var history = require('./lib/history');
// var jekyllAjax = require('./modules/jekyllAjax');
var shopify = require('./modules/shopify');
var populateCollection = require('./modules/populateCollection');
var ljwaypoints = require('./modules/ljwaypoints');

// // Detect if JavaScript is enabled
detect();
// history();
// jekyllAjax();
draggable();
fotorama();
shopify();
populateCollection();
waypoints();
ljwaypoints();
//
// // Print success message to console
console.log('<head> scripts loaded.')
