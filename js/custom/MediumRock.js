MediumRock = function() {
	var obj = new Object();
	obj.setvertices(new Float32Array([ 7.5, 2, 15, 0, 16, 7.5,
										7.5, 2, 8, 7.5, 16, 7.5,
										10, 7.5, 7.5, 15, 0, 6.5,
										0, 6.5, 3, 13, 7.5, 15,
										7.5, 13, 8, 21, 16, 20,
										7.5, 15, 15, 15, 16, 20,
										13, 15, 21, 15, 16, 7.5,
										21, 15, 22, 8, 14, 7.5]));
	obj.setcolor(new Array(255,255,255 ));
	obj.setnumItems(24);
	var child = new Object();
	child.setvertices(new Float32Array([9.5, 4, 13, 2, 14, 7.5,
										9.5, 4, 10, 7.5, 14, 7.5,
										10, 9.5, 9.5, 15, 2, 9.5,
										2, 8.5, 5, 15, 5.5, 15,
										9.5, 15, 10, 19, 14, 18,
										9.5, 15, 13, 15, 14, 18,
										13, 13, 19, 13, 14, 7.5,
										19, 13, 20, 10, 14, 7.5
										]));
	child.setcolor(new Array(0,0,0 ));
	child.setnumItems(24);
	obj.addchild(child);
	return obj;
}

MediumRock.prototype = new Object();
MediumRock.prototype.constructor = MediumRock;