var gl;
var canvas;
var shaderProgram;
var positionLocation;
var colorLocation;
var translationLocation;
var resolutionLocation;
var rotationLocation;
var scaleLocation;

function initGL(canvass) {
    try {
		canvas = document.getElementById("playground");
		gl = getWebGLContext(canvas);
    } catch (e) {
    }
    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }
}

function initShaders() {
    var fragmentShader; // = getShader(gl, "shader-fs");
    var vertexShader; //= getShader(gl, "shader-vs");
	
	vertexShader = createShaderFromScriptElement(gl, "shader-vs");
	fragmentShader = createShaderFromScriptElement(gl, "shader-fs");
	
	program = createProgram(gl, [vertexShader, fragmentShader]);
	gl.useProgram(program); 
	
	// look up where the vertex data needs to go.
	positionLocation = gl.getAttribLocation(program, "a_position");
	// lookup uniforms
	resolutionLocation = gl.getUniformLocation(program, "u_resolution");
	colorLocation = gl.getUniformLocation(program, "u_color");
	translationLocation = gl.getUniformLocation(program, "u_translation");
	rotationLocation = gl.getUniformLocation(program, "u_rotation");
	scaleLocation = gl.getUniformLocation(program, "u_scale");
	// set the resolution
	console.log(canvas.width + " " + canvas.height)
	gl.uniform2f(resolutionLocation, $("canvas").width(), $("canvas").height()); 
	
}

var mvMatrix = mat4.create();
var pMatrix = mat4.create();

function setMatrixUniforms() {
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
}	

function initBuffers() {
	var buffer = gl.createBuffer();
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.enableVertexAttribArray(positionLocation);
	gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
	
	Objects.forEach(function(obj) {		
		obj.getchilds().forEach(function(child) {
			calcBuffer(child, buffer);
		});
		calcBuffer(obj, buffer);
	});
	
	if (ship) {
		ship.getchilds().forEach(function(child) {
			calcBuffer(child, buffer);
		});
		calcBuffer(ship, buffer);
	}
}

function calcBuffer(obj, buffer){
	var scale = [0.5, 0.7];
	//scale = [(1/($("canvas").height() / 300))*0.7,(1/($("canvas").width() / 150))*0.5];
	
	if ($("canvas").height() > $("canvas").width()) {
		// scale = [(1/($("canvas").height() / 500)),(1/($("canvas").width() / 200))];
		scale = [2,1];
	} else {
		// scale = [(1/($("canvas").height() / 200)),(1/($("canvas").width() / 1300))];
		scale = [1,1];
	}
	var xscal = $("canvas").width();
	var yscal = $("canvas").height();
	xscal = xscal / 300;
	yscal = yscal /150;
	scale = [xscal, yscal];
	//scale = [(1/($("canvas").height() / 300)),(1/($("canvas").width() / 420))];
	//scale = [(1/($("canvas").height() / 500)),(1/($("canvas").width() / 200))];
	gl.bufferData(gl.ARRAY_BUFFER, obj.getvertices(),gl.STATIC_DRAW); 
	gl.uniform4f(colorLocation, obj.getcolor()[0],obj.getcolor()[1],obj.getcolor()[2], 1);
	// Set the translation.
	gl.uniform2fv(translationLocation, obj.gettranslation()); 
	gl.uniform2fv(rotationLocation, obj.getrotation());
	// Set the scale.
    gl.uniform2fv(scaleLocation, scale);
	gl.drawArrays(gl.TRIANGLES, 0, obj.getnumItems());
}


function drawScene() {
	var translation = [0, 0];
}

function drawObjects(obj){
	// mat4.translate(mvMatrix, obj.getMatTranslation());
	// gl.bindBuffer(gl.ARRAY_BUFFER, obj.buffer);
	// gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, obj.getitemSize(), gl.FLOAT, false, 0, 0);
		
	// gl.bindBuffer(gl.ARRAY_BUFFER, obj.colorbuffer);
	// gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, obj.getitemSize(), gl.FLOAT, false, 0, 0); 

	// setMatrixUniforms();
	// gl.drawArrays(gl.TRIANGLE_STRIP, 0, obj.getnumItems());
}

function webGLStart() {
    var canvas = document.getElementById("playground");
    initGL(canvas);
	if (gl) {
		// canvas.onmousedown = handleMouseDown;
		// document.onmouseup = handleMouseUp;
		// document.onmousemove = handleMouseMove;
		//canvas.ontouchstart = handleStart;
		//canvas.onmousedown = handleStart;
		initShaders();
		setTimeout("mainLoop()", 1);
	}

	//window.requestAnimationFrame(animate);
// gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.enable(gl.DEPTH_TEST);
    

    //drawScene();
}

var ship;

function mainLoop(){
	//
	//console.log(Objects.length);
	if (!ship) {
		console.log("init ship")
		ship = new Ship();
		// Ship.shouldMove();
		ship.settranslation($("canvas").width() / 2,$("canvas").height()/2);
		// ship.setrotation(-200, 1);
		//ship.shouldMove();
		//Objects.push(ship);
	} else {
		// console.log(lastMouseX + " " + lastMouseY);
		//console.log(Objects[0].getspeed());
		// Objects[0].setspeed(10);
		// var test = Objects[0].Move();
		// console.log(test[0] + " " + test[1]); 
		ship.move();
		// ship.setrotation(-2, 1);
		// Objects[0].settranslation(Math.random() * 1000 % 300,Math.random() * 1000 % 150);
		// console.log(Objects[0].getspeed());
		// if(Objects[0].shouldMove()) {
			// Objects[0].settranslation(lastMouseX,lastMouseY);
		// }
	}
	// console.log(Objects[0].getspeed());
	initBuffers();
	window.requestAnimationFrame(mainLoop);
}