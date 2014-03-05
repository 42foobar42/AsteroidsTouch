var mouseDown;
var lastMouseX;
var lastMouseY;
var lastTime;
var ongoingTouches = new Array();
var MoveTime = 250;

function generateControls() {
	var el = document.getElementsByTagName("canvas")[0];
	// el.addEventListener("mousedown", handleStart, false);
	el.addEventListener("touchstart", handleStart, false);
	el.addEventListener("touchend", handleEnd, false);
	el.addEventListener("touchcancel", handleEnd, false);
	el.addEventListener("touchleave", handleEnd, false);
	el.addEventListener("touchmove", handleMove, false);
}

function handleStart(evt) {
// console.log("touchstart.");
  evt.preventDefault();
  console.log(evt);
  ongoingTouches.push(new Array(new Date().getTime(), evt));
// console.log("touchstart. goon");
  // var el = canvas;
  // var ctx = el.getContext("3d");
  // var touches = evt.changedTouches;
  // console.log("ctx: " + ctx);
  // for (var i=0; i < touches.length; i++) {
    // console.log("touchstart:"+i+"...");
    // ongoingTouches.push(copyTouch(touches[i]));
    // var color = colorForTouch(touches[i]);
    // ctx.beginPath();
    // ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0,2*Math.PI, false);  // a circle at the start
    // ctx.fillStyle = color;
    // ctx.fill();
    // console.log("touchstart:"+i+".");
  // }
}

function handleMove(evt) {
	for (var i=0; i < ongoingTouches.length; i++) {
		// console.log(( new Date().getTime() - ongoingTouches[i][0]) + " > " + MoveTime);
		if(( new Date().getTime() - ongoingTouches[i][0]) > MoveTime) {
			// console.log("Change touch");
			// console.log(ongoingTouches[i][1].targetTouches[0].clientX + "  " + evt.targetTouches[0].clientX);
			// ongoingTouches[i][1].targetTouches[0].clientX = evt.targetTouches[0].clientX;
			// ongoingTouches[i][1].targetTouches[0].clientY = evt.targetTouches[0].clientY;
			ongoingTouches[i][1] = evt;
		}
	}
}

function handleEnd(evt) {
	
	for (var i=0; i < ongoingTouches.length; i++) {
		if(evt === ongoingTouches[i][1]) {
			// if under time shoot!
			if (( new Date().getTime() - ongoingTouches[i][0]) < MoveTime){
				// shoot
			}
			ongoingTouches.splice(i,1);
		}
	}
	// console.log(ongoingTouches.length);
  // evt.preventDefault();
  // console.log("touchend/touchleave.");
  // console.log(evt);
  // var el = document.getElementsByTagName("canvas")[0];
  // var ctx = el.getContext("2d");
  // var touches = evt.changedTouches;

  // for (var i=0; i < touches.length; i++) {
    // var color = colorForTouch(touches[i]);
    // var idx = ongoingTouchIndexById(touches[i].identifier);

    // if(idx >= 0) {
      // ctx.lineWidth = 4;
      // ctx.fillStyle = color;
      // ctx.beginPath();
      // ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      // ctx.lineTo(touches[i].pageX, touches[i].pageY);
      // ctx.fillRect(touches[i].pageX-4, touches[i].pageY-4, 8, 8);  // and a square at the end
      // ongoingTouches.splice(idx, 1);  // remove it; we're done
    // } else {
      // console.log("can't figure out which touch to end");
    // }
  // }
}

function handleCancel(evt) {
  // evt.preventDefault();
  // console.log("touchcancel.");
  // var touches = evt.changedTouches;
  
  // for (var i=0; i < touches.length; i++) {
    // ongoingTouches.splice(i, 1);  // remove it; we're done
  // }
}
