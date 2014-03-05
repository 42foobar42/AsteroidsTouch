UFO = function () {
	var obj = new Object();
	obj.setvertices(new Float32Array([0, 10, 10, 4, 10, 10,
										10, 4, 10, 10, 20, 4,
										10, 10, 20, 4, 20, 10,
										20, 10, 20, 4, 30, 10,
										0, 10, 10, 20, 10, 10,
										10, 20, 20, 10, 10, 10,
										20, 10, 20, 20, 10, 20,
										20, 20, 20, 10, 30, 10,
										13, 0, 13, 4, 17, 0,
										13, 4, 17, 0, 17, 4
										]));
	obj.setcolor(new Array(255,255,255 ));
	obj.setnumItems(30);
	var child = new Object();
	child.setvertices(new Float32Array([4, 9, 10, 6, 10, 9,
										10, 9, 10, 6, 18, 6,
										18, 6, 10, 9, 18, 9,
										18, 9, 18, 6, 26, 9,
										4, 11, 10, 18, 10, 11,
										10, 18, 10, 11, 20, 18,
										20, 18, 10, 11, 20, 11,
										20, 11, 20, 18, 26, 11,
										14, 1, 14, 4, 16, 1,
										14, 4, 16, 1, 16, 4]));
	child.setcolor(new Array(0,0,0 ));
	child.setnumItems(30);
	obj.addchild(child);
	return obj;
}

UFO.prototype = new Object();
UFO.prototype.constructor = UFO;

