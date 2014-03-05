function makePlaygroundSize(){
	var sizeHeader = $("header").height();
	$("div#main").height($("html").height() - sizeHeader);
	console.log("Can: " + $("canvas").height() + " " + $("canvas").width());
}

function makeObjects(){
	var temp = new UFO();
	temp.settranslation(50, 30);
	//temp.rotate(0.1, 1);
	Objects.push(temp);
	temp = new Ship();
	temp.settranslation(250, 250);
	temp.setrotation(-0.63, -0.77);
	Objects.push(temp);	
	temp = new Laser();
	temp.settranslation(157, 40);
	Objects.push(temp);	
	temp = new BigRock();
	temp.settranslation(30, 80);
	Objects.push(temp);	
	temp = new MediumRock();
	temp.settranslation(80, 120);
	Objects.push(temp);
	temp = new SmallRock();
	temp.settranslation(180, 70);
	Objects.push(temp);		
}

$( document ).ready(function() {
	makePlaygroundSize();
	//makeControls();
	//makeObjects();
	generateControls();
	webGLStart();
	//var obj = new Object();
	//obj.setitemSize(120);
	//alert(obj.getitemSize());
});