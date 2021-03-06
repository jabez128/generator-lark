/**
 * Lark Application - index.js
 * Copyright(c) 2015 lark-team
 * MIT Licensed
 */
'use strict';

var lark = require('lark');
var app = lark();

app.run(function (port) {
  console.log('running on', port);
});



/**
 * More Usage:
 * You can initialize 2 important configs here:

   var app = lark({
     directory : "YOUR/CONFIG/DIRECTORY", //Set your config dir path
     env : "development",                 //Set running env
   });

 * app.run accepts at most 2 params
 * You can set the port here

   app.run(3000, function (port) {
     console.log("running on", port);
   });

 *
 **/
