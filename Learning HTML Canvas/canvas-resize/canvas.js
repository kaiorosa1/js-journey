var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(240, 200, 0, 0.8)';
// c.fillRect(100,100,100,100);
// c.fillRect(200,300,100,100);
// c.fillRect(300,500,100,100);
// console.log(canvas);


// // Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = '#ffff';
// c.stroke();

// Arc/ Circle 
// c.beginPath();
// c.arc(300, 300, 30, 0 , Math.PI *2, false);
// c.strokeStyle = 'blue';
// c.stroke();


// var i =0;

//  while(i< 5){
//  	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
//  	c.beginPath();
// 	c.arc(x, y, 30, 0 , Math.PI *2, false);
// 	c.strokeStyle = 'blue';
// 	c.stroke();

// 	i++;
//  }
var mouse = {
	x: undefined,
	y: undefined
};

// min and max radius of the circles
var maxRadius = 40;
var minRadius = 3;

var colorArray = [
'#a82b25',
'#eabea0',
'#596c6a',
'#c0ee59',
'#f902cd',
'#36f895'
];

window.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
});

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});

function Circle(x, y, dx, dy, radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random()* colorArray.length)];
	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0 , Math.PI *2, false);
		c.strokeStyle = 'blue';
		c.stroke();
		c.fillStyle = this.color;
		c.fill();
	}
	this.update = function(){
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
			this.dx=-this.dx;
		}
		if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy=-this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;


		// interactivity 
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50
			&& mouse.y - this.y < 50 && mouse.y - this.y > -50 ){
			if(this.radius < maxRadius){
				this.radius += 1;
			}
			
		}else if(this.radius > this.minRadius){

			this.radius -= 1;
		}
		this.draw();

	}
}


var circle = new Circle(200,200,3,3,30);


// var x  = Math.random() * innerWidth; 
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5)* 8;
// var dy = (Math.random() - 0.5)* 8;
// var raidius = 30;

var circleArray = [];

function init(){
	circleArray = [];
	for (var i = 0; i < 300; i++) {
		var radius = Math.random()*5 + 1 ;
		var x  = Math.random() * (innerWidth - radius*2) + radius; 
		var y = Math.random() * (innerHeight - radius*2) + radius;
		var dx = (Math.random() - 0.5)* 4;
		var dy = (Math.random() - 0.5)* 4;
		
		circleArray.push(new Circle(x,y,dx,dy,radius));
	}

}
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth, innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

}

init();
animate();

