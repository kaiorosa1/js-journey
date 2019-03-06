var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

function Person(){
	// the person itself
}

function Head(x,y,radius){
	//Person's head
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0 , Math.PI *2, false);
		c.strokeStyle = 'black';
		c.stroke();
		c.fill();
	}
}

function Body(x,y,w,h){
	// Person's body
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.draw = function(){
		c.beginPath();
		c.rect(this.x,this.y,this.w,this.h);
		c.stroke();
		c.fill();
 	}

}
function Arm(){
	// Person's arm
}

function Leg(){
   // Person's leg 
}

var Head = new Head(200,200,30);
var Body = new Body(170,230,60,100);

function animate(){
	requestAnimationFrame(animate);
	Head.draw();
	Body.draw();
}

animate();