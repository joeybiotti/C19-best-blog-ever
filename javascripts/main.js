"use strict";

console.log("main.js");

let $ = require('jquery');

let Handlebars = require('hbsfy/runtime'),
	postTemplate = require('../javascripts/posts.js'),
	postData = require('../templates/post-data.js');

Handlebars.registerHelper("increment", (value)=> parseInt(value) + 1);

// $("#post-area").append(postTemplate(postData));

function populatePage(things){
	let postDiv = document.createElement("div");
}
