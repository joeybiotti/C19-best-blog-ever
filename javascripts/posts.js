"use strict";

let blogPosts = [];
let blogEntries = {};

blogEntries.getBlogPosts =() =>{
	return blogPosts;
};

blogEntries.loadPosts= () => {
	return new Promise(function(resolve, reject){
		let blogPoster = new XMLHttpRequest();
		blogPoster.open("GET", "posts.json");
		blogPoster.send();

		blogPoster.addEventListener("load", function(){
			var data = JSON.parse(this.responseText);
			resolve(data);
		});
	});
};

module.exports = blogEntries;