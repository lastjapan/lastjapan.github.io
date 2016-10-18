// Define Dependencies
var detect = require('./lib/detect');
var jquery = require('./lib/jquery');
var history = require('./modules/history');
var jekyllAjax = require('./modules/jekyllAjax');
var bg = require('./modules/bg');
var coverVid = require('./modules/coverVid');

// // Detect if JavaScript is enabled
detect();

jquery();
history();
jekyllAjax();
bg();
coverVid();
//
// // Print success message to console
// console.log('<head> scripts loaded.')
