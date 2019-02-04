 $(document).ready(function(){

 /*

 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("body").css("background-color", "yellow");

// all p elements
//  $("p").css("background-color", "yellow");
// the p element with an ID of "intro"

 // $("#intro").css("background-color", "yellow");

// all elements with a class of "note"

 // $(".note").css("background-color", "yellow");
// all DIV elements with a class of note
// $("div.note").css("background-color", "yellow");

// all p elements in the article element
// $("article p").css("background-color", "yellow");

// the last element in any section which is a p tag
// $("p:last").css("background-color", "yellow");

// the first paragraph on the page
// $("p:first").css("background-color", "yellow");

// all p elements which have a link
// $("p a").css("background-color", "yellow");

// the second li within nested ul element
// $("ul li:nth-child(2)").css("background-color", "yellow");

// every second and third p element
// $("p:nth-of-type(2),p:nth-of-type(3)").css("background-color", "yellow");

// });

// $(document).ready(function(){

//$("#myform").remove();
// var newItem=$('<div>3</div>');

// $("article").append(newItem);
// var newItem=$('<div>3</div>');
// $("article").append(newItem);
// var newItem=$('<div>3</div>');
// $("article").append(newItem);
// var newItem=$('<div>3</div>');
// $("article").append(newItem);
// var newItem=$('<div>3</div>');
// $("article").append(newItem);

// $("#msg").val("Search for...");

// $("div").addClass("box");

$("a").attr("href","http://www.codefactory.wien");
$("code").css("color", "red");

$("ol>li").css("background-color","#2a7b90");

$("textarea").attr("placeholder","Express your opinion");

$("img").attr("src","https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png");

$("blockquote").css({"color":"orange","font-style":"italic"});

$("#logo").css({"color":"black"});

$("#logo .gray").css({"color":"white"});

$(".date").text("");

var newItem=$("<li>New Templates</li>");
$(".sidemenu:first").append(newItem);	

var newItem=$('<li>Order Template</li>');
$(".sidemenu:first").append(newItem);

var newItem=$('<li>Contact Us</li>');
$(".sidemenu:first").append(newItem);



$("#sidebar>p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

sidebar
});