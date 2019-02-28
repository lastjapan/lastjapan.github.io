// Define Dependencies
var detect = require('./lib/detect');
var draggable = require('./modules/draggable');
var ljwaypoints = require('./modules/ljwaypoints');

// // Detect if JavaScript is enabled
detect();

draggable();
ljwaypoints();
//
// // Print success message to console
// console.log('<head> scripts loaded.')
