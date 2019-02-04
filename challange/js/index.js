$(document).ready(function(){


	var groceryArticles = JSON.parse(grocery_data);

	
	for(var i= 0; i<groceryArticles.length)
	document.getElementById("store_articles").innerHTML=groceryArticles;

	// document.getElementById("main").addEventListener("click", do_login, false);

});