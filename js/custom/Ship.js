Ship = function (){
	this.init();
	/*var obj = new Object();
	obj.setvertices(new Float32Array([7.5, 0, 0, 20, 15, 20]));
	obj.setcolor(new Array(255,255,255 ));
	obj.setnumItems(3);
	var child = new Object();
	child.setvertices(new Float32Array([7.5, 3, 3, 15, 12, 15,
										3, 17, 2, 20, 13, 20,
										3, 17, 12, 17, 13, 20]));
	child.setcolor(new Array(0,0,0 ));
	child.setnumItems(9);
	obj.addchild(child);
	return obj;*/
}

Ship.prototype = new Object();
Ship.prototype.constructor = Ship;

Ship.prototype.shouldMove = function() {
	var check = false;
	if (mouseDown){
		var now = new Date().getTime();
		//console.log((lastTime + 1000)  + " > " + now);
		if ((lastTime + MoveTime) < now){
			check = true;
		}
	} /*else {
		this.move = false;
	}*/
	return check;
}

Ship.prototype.move = function() {
	
	// console.log("first calls");
	// this.setrotation(1, 0);
	// console.log("set call");
	//r[0] = -0.5;
	// x[0] += 1;
	// if(x[0] > 300) x[0] = 1;
	// console.log(x[0]);
	// this.settranslation(x[0],x[1]);
	if(ongoingTouches.length > 0){
		// console.log("MOve");
		/////ongoingTouches.forEach(function(touches) {	
		for (var i = 0; i < ongoingTouches.length; i++){
			var touches = ongoingTouches[i];
			var trans = this.gettranslation();
			var r = this.getrotation();
			var cov = this.getchilds();
			if((touches[0] + MoveTime) < new Date().getTime()){
				//var X
				//x[0] = touches[1].targetTouches[0].clientX ;
				//this.settranslation(touches[1].targetTouches[0].clientX, 150);
				
				//set speed
				// set angle
				// this.setrotation(touches[1].targetTouches[0].clientX, touches[1].targetTouches[0].clientY);
				// this.setrotation(0.5, 0.5);
				var xNeg = false;
				var yNeg = false;
				var xOfTri = touches[1].targetTouches[0].clientX - trans[0];
				var yOfTri = touches[1].targetTouches[0].clientY - trans[1];
				var movex = 0;
				var movey = 0;
				if (xOfTri < 0) {
					xOfTri *= -1;
					xNeg= true;
				}
				if (yOfTri < 0) {
					yOfTri *= -1;
					yNeg= true;
				}
				// console.log("xOfTri: " + xOfTri + " ?yOfTri: " + yOfTri);
				var a = Math.sqrt(xOfTri) + Math.sqrt(yOfTri);
				// console.log("a: " + a);
				var xRot = Math.sqrt(xOfTri) / a;
				// console.log("xRot: " + xRot);
				var yRot = Math.sqrt(yOfTri) / a;
				// console.log("yRot: " + yRot);
				
				if (xNeg === true){ 
					xRot *= -1;
				}
				if (yNeg === true){ 
					yRot *= -1;
				}	
				xRot *= -1;
				yRot *= -1;
				// // if (xRot < 0) {
					// // movex = trans[0] - 5;
				// // } else {
					// // movex = trans[0] + 5;
				// // }
				// // if (yRot < 0) {
					// // movey = trans[1] - 5;
				// // } else {
					// // movey = trans[1] + 5;
				// // }
				// // this.settranslation(movex, movey);
				this.setrotation(xRot, yRot);
				// console.log("Touches X: " + touches[1].targetTouches[0].clientX + "  | Y: " + touches[1].targetTouches[0].clientY);
				// console.log("Pos X: " + trans[0] + " | Y: " + trans[1]);
				// console.log("Normal X: " + xRot + " | Y: " + yRot);
				
				// r[0] = xRot;
				// r[1] = yRot;
				// cov.forEach(function(obj) {		
					// obj.rotation = [xRot, yRot];
				// });
				//console.log("call setrot" + this.gettranslation()[0]);
				// var res = this.setrotation(1, 2);
				// Ship.parent.setrotation.call(xRot, yRot);
				// set speed in direction
				// this.settranslation(1, 20);
				//return new Array(touches[1].targetTouches[0].clientX, touches[1].targetTouches[0].clientY);
			}
		//////});
		}
	}
}

Ship.prototype.init = function (){
	// var obj = new Object();
	this.setvertices(new Float32Array([7.5, 0, 0, 20, 15, 20]));
	this.setcolor(new Array(255,255,255 ));
	this.setnumItems(3);
	var child = new Object();
	child.setvertices(new Float32Array([7.5, 3, 3, 15, 12, 15,
										3, 17, 2, 20, 13, 20,
										3, 17, 12, 17, 13, 20]));
	child.setcolor(new Array(0,0,0 ));
	child.setnumItems(9);
	this.addchild(child);
	// return obj;
}