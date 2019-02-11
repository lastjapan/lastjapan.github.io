// Define Dependencies
var detect = require('./lib/detect');
var jquery = require('./lib/jquery');
var draggable = require('./modules/draggable');
var coverVid = require('./modules/coverVid');

// // Detect if JavaScript is enabled
detect();

jquery();
draggable();
coverVid();
//
// // Print success message to console
// console.log('<head> scripts loaded.')
