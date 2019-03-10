var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');



// creates the body parts
var Head = new Head(200,200,30);
var Body = new Body(170,230,60,100);
var ArmLeft = new Arm(140,230,30,100);
var ArmRight = new Arm(230,230,100,30);
var LegLeft = new Leg(200,330,30,100);
var LegRight = new Leg(170,330,30,100);
var Person = new Person(Head,Body,ArmLeft,ArmRight,LegLeft,LegRight);

function Person(Head,Body,ArmLeft,ArmRight,LegLeft,LegRight){
	this.Head = Head;
	this.Body = Body;
	this.ArmLeft = ArmLeft;
	this.ArmRight = ArmRight;
	this.LegLeft = LegLeft;
	this.LegRight = LegRight;
	this.dx = 5;
	// the person itself
	this.draw = function(){
		this.Head.draw();
		this.Body.draw();
		this.ArmLeft.draw();
		this.ArmRight.draw();
		this.LegLeft.draw();
		this.LegRight.draw();
	}
	this.update = function(){
		if(this.ArmRight.x  + 100 >= innerWidth || this.ArmLeft.x  + 100 >= innerWidth){
			this.dx = -this.dx;
			let placeholder = this.ArmLeft.x - 60;
			this.ArmLeft.x  = this.ArmRight.x;
			this.ArmRight.x = placeholder;
		}
		if(this.ArmLeft.x <= 0 || this.ArmRight.x <=0){
			this.dx = -this.dx;
			let place = this.ArmLeft.x;
			this.ArmLeft.x  = this.ArmRight.x + 60;
			this.ArmRight.x = place;
		}
		this.Head.x +=this.dx;
		this.Body.x +=this.dx;
		this.ArmLeft.x +=this.dx;
		this.ArmRight.x +=this.dx;
		this.LegLeft.x +=this.dx;
		this.LegRight.x +=this.dx;
		
		this.draw();

	}
	
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


// start the animation per say
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth, innerHeight);
	Person.update();
}


// Event listeners 
// first stages
window.addEventListener('movemove',function(){
	console.log("Me!");
});

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});


animate();