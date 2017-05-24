"use strict";

console.log("main.js");

let $ = require("jquery");
let posts = new new XMLHttpRequest();

posts.addEventListener("load", postComplete);
posts.addEventListener("error", postFailed);

function postComplete (event) {
	console.log("blog posts loaded");
	var data = JSON.parse(event.target.responseText);
	console.log("the data that loaded was ", data);

	makePost(data);
}

function postFailed (event){
	console.log("posts failed to load");
}

posts.open("GET", posts.json);
posts.send();

function makePost(post){
	let postArea = $("#post-area");
	let postData = "";

	for(blogPost in posts){
		blogEntry = posts[blogPost];
	postData += "<div>";
	postData += "<h2>" + blogEntry.entry + "</h2>";
	postData += "<p>" + blogEntry.post + "</p>"
	postData += "</div>"
	}
}

module.exports = {postComplete, postFailed, makePost}