$(document).ready(function(){



var xxx = grocery_data;
	
	for(var i= 0; i<xxx.length;i++){
		document.getElementById("store_articles").innerHTML+="Name: " + xxx[i].name + "<br>";
		document.getElementById("store_articles").innerHTML+="Price: " + xxx[i].price + "<br>";
		document.getElementById("store_articles").innerHTML+="Count: " + xxx[i].items + "<br>" + "<br>";
		document.getElementById("store_articles").innerHTML+="<img src='"+xxx[i].img+"'></img>" + "<br>";
	}
	
	

	// document.getElementById("main").addEventListener("click", do_login, false);

});