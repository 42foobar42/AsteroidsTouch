var Objects = new Array();

// function Object()
// {
	// var childs = new Array();
	// var vertices = new Array();
	// var color = new Array();
	// var numItems = 0;
	// var rotation = [0,1];
	// var translation = [0,0];
	// //var borderSurface;
	
	// this.getBorder = function ()
	// {
		// return borderSurface;
	// }
	
	// this.getnumItems = function()
	// {	
		// return numItems;
	// }
	
	// this.setnumItems = function(iItems)
	// {	
		// numItems = iItems;
	// }
	
	// this.setvertices = function(ivertices)
	// {	
		// vertices = ivertices;
	// }
	
	// this.getvertices = function()
	// {	
		// return vertices;
	// }
	
	// this.setrotation = function(x, y){
		// rotation = [x, y];
		// childs.forEach(function(obj) {		
			// obj.setrotation(x, y);
		// });
	// }
	
	// this.getrotation = function(){
		// return rotation;
	// }
	
	// this.settranslation = function(x, y) {
		// translation = [x,y];
		// childs.forEach(function(obj) {		
			// obj.settranslation(x, y);
		// });
	// }
	
	// this.gettranslation = function() {
		// return translation;
	// }
	
	// this.setcolor = function(icolor) {
		// color = icolor;
	// }
	
	// this.getcolor = function(){
		// return color;
	// }
	
	// this.getchilds = function () {
		// return childs;
	// }
	
	// this.addchild = function (obj) {
		// childs.push(obj);
	// }
// }

Object = function(){
	this.coverage = new Array();
}

Object.prototype.coverage = "";
Object.prototype.vertices = new Array();
Object.prototype.color = new Array();
Object.prototype.numItems = 0;
Object.prototype.rotation = [0,1];
Object.prototype.translation = [0,0];
Object.prototype.speed = 0;
Object.prototype.lastrotation = new Date().getTime();
Object.prototype.lastmove = new Date().getTime();
	//var borderSurface;
	
Object.prototype.getspeed = function(){	
	return this.speed;
}

Object.prototype.setspeed = function(ispeed){	
	this.speed = ispeed;
}

Object.prototype.getnumItems = function(){	
	return this.numItems;
}

Object.prototype.setnumItems = function(iItems){	
	this.numItems = iItems;
}
	
Object.prototype.setvertices = function(ivertices){	
	this.vertices = ivertices;
}
	
Object.prototype.getvertices = function(){	
	return this.vertices;
}
	
Object.prototype.setrotation = function(x, y){
	this.rotation = [x, y];
	//console.log(coverage.length);
	this.coverage.forEach(function(obj) {		
		obj.setrotation(x, y);
	});
	return 1;
}
	
Object.prototype.getrotation = function(){
	return this.rotation;
}
	
Object.prototype.settranslation = function(x, y) {
	this.translation = [x,y];
	//console.log(coverage.length);
	this.coverage.forEach(function(obj) {		
		obj.settranslation(x, y);
	});
}
	
Object.prototype.gettranslation = function() {
	return this.translation;
}
	
Object.prototype.setcolor = function(icolor) {
	this.color = icolor;
}
	
Object.prototype.getcolor = function(){
	return this.color;
}
	
Object.prototype.getchilds = function () {
	return this.coverage;
}

Object.prototype.addchild = function (obj) {
	this.coverage.push(obj);
}
