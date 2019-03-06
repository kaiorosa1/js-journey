var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

function Person(){
	// the person itself
}

// this is the head
function Head(x,y,radius){
	//Person's head
	this.x = x;
	this.y = y;
	this.radius = radius;
	// draws the head
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
	// draws the body
	this.draw = function(){
		c.beginPath();
		c.rect(this.x,this.y,this.w,this.h);
		c.stroke();
		c.fill();
 	}

}


function Arm(x,y,w,h){
	// Person's arm
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	// draws the arm
	this.draw = function(){
		c.beginPath();
		
		c.save();
		c.rect(this.x,this.y,this.w,this.h);
		c.restore();
		c.strokeStyle = 'red';
		c.stroke();
		c.fill();
 	}
}

function Leg(x,y,w,h){
   // Person's leg 
   	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	//draws the leg
	this.draw = function(){
		c.beginPath();
		
		c.save();
		c.rect(this.x,this.y,this.w,this.h);
		c.restore();
		c.strokeStyle = 'blue';
		c.stroke();
		c.fill();
 	}
}

// creates the body parts
var Head = new Head(200,200,30);
var Body = new Body(170,230,60,100);
var ArmLeft = new Arm(140,230,30,100);
var ArmRight = new Arm(230,230,100,30);
var LegLeft = new Leg(200,330,30,100);
var LegRight = new Leg(170,330,30,100);

// start the animation per say
function animate(){
	requestAnimationFrame(animate);
	Head.draw();
	Body.draw();
	ArmLeft.draw();
	ArmRight.draw();
	LegLeft.draw();
	LegRight.draw();
}

animate();