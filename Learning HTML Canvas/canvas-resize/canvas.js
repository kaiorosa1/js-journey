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


var x = 200;
var raidius = 30;
var dx = 5;
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth,innerHeight);
	c.beginPath();
	c.arc(x, 300, raidius, 0 , Math.PI *2, false);
	c.strokeStyle = 'blue';
	c.stroke();

	if(x + raidius > innerWidth || x - raidius < 0){
		dx=-dx;
	}
	x += dx;
}

animate();