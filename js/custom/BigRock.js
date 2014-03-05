BigRock = function() {
	var obj = new Object();
	obj.setvertices(new Float32Array([0, 15, 15, 0, 15, 15,
										15, 0, 15, 2, 35, 15,
										0, 15, 0, 30, 15, 15,
										0, 30, 15, 45, 15, 30,
										0, 30, 2, 30, 15, 2,
										15, 45, 30, 50, 35, 30,
										32, 31, 45, 32, 45, 15,
										33, 12, 45, 15, 35, 30,
										35, 13, 35, 3, 15, 0]));
	obj.setcolor(new Array(255,255,255 ));
	obj.setnumItems(27);
	var child = new Object();
	child.setvertices(new Float32Array([2, 15, 15, 2, 15, 15,
										2, 15, 2, 30, 15, 15,
										2, 30, 15, 43, 15, 30,
										15, 43, 30, 48, 33, 30,
										32, 28, 43, 30, 43, 17,
										33, 15, 43, 17, 35, 30,
										33, 15, 33, 5, 15, 2]));
	child.setcolor(new Array(0,0,0 ));
	child.setnumItems(21);
	obj.addchild(child);
	return obj;
}

BigRock.prototype = new Object();
BigRock.prototype.constructor = BigRock;