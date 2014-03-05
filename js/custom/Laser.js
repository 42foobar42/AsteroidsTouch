Laser = function() {
	var obj = new Object();
	obj.setvertices(new Float32Array([0, 0, 0, 10, 1.5, 0, 1.5, 0, 1.5, 10, 0, 10 ]));
	obj.setcolor(new Array(255,255,255 ));
	obj.setnumItems(6);
	return obj;
}

Laser.prototype = new Object();
Laser.prototype.constructor = Laser;