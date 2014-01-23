function makePlaygroundSize(){
	var sizeHeader = $("header").height();
	console.log(sizeHeader);
	$("div#main").height($("html").height() - sizeHeader);
}

$( document ).ready(function() {
	makePlaygroundSize();
	webGLStart();
});