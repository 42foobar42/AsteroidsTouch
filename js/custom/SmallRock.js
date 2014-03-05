SmallRock = function() {
	this.setvertices(new Float32Array([0, 5, 5, 0, 5, 5,
										5, 0, 5, 5, 10, 5,
										5, 0, 9, 0, 10, 5,
										0, 10, 5, 3, 5, 12,
										5, 12, 11, 12, 5, 3,
										11, 12, 15, 9, 5, 3,
										13, 4, 13, 10, 5, 3]));
	this.setcolor(new Array(255,255,255 ));
	this.setnumItems(21);
	var child = new Object();
	child.setvertices(new Float32Array([2, 4, 5, 2, 5, 4,
										5, 2, 5, 4, 9, 5,
										5, 2, 8, 2, 9, 5,
										2, 10, 7,3, 5, 10,
										5, 10, 9, 10, 7, 3,
										9, 10, 13, 9, 7, 3,
										12, 6, 12, 8, 5, 3
										]));
	child.setcolor(new Array(0,0,0 ));
	child.setnumItems(21);
	this.addchild(child);
}

SmallRock.prototype = new Object();
SmallRock.prototype.constructor = SmallRock;