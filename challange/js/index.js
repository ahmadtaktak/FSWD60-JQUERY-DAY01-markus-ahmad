$(document).ready(function(){
$("form").submit(function(e) {

	e.preventDefault();
	
	

});
//$("#myform").remove();

for(var i=1;i<=5;i++){
	var newItem=$('<div>3</div>');
	$("article").append(newItem);	
}

$("#msg").val("Search for...");

$("div").addClass("box");

$("a").attr("href","http://www.codefactory.wien");

});