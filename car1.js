$(window).ready(function()
{
	x = 30;
	y = 30;
	speed = 5;
	angle = 0;
	mod = 0;

	canvas = document.getElementById("canvas");

	context = canvas.getContext("2d");

	car = new Image();
    car.src="car4.png";


		//wrap in document.on
    window.addEventListener("keydown", keypress_handler, false);
    window.addEventListener("keyup", keyup_handler, false);



	var move = setInterval(function()
	{
		draw();
	}, 30);


});

function draw()
{
	context = canvas.getContext("2d");

	context.clearRect(0, 0, 1200, 1200);


	//context.fillStyle = "rgb(200, 100, 220)";
	//context.fillRect(50, 50, 100, 100);

	x += (speed*mod) ;//* Math.cos(Math.PI/180 * angle);
	//y += (speed*mod) ;//* Math.sin(Math.PI/180 * angle);

	context.save();

	context.translate(x, y);

	//context.rotate(Math.PI/180 * angle);
	context.drawImage(car, -(car.width/2), -(car.height/2));

	context.restore();
	if(obj.x > anvas.x){
            context.stop();
        } ;

}



function keyup_handler(event)
{
	if(event.keyCode == 87 || event.keyCode == 83)
	{

		mod = 0;
	}
}



function keypress_handler(event)
{
	console.log(event.keyCode);
	if(event.keyCode == 87)
	{
		mod = 2;
	}
	if(event.keyCode == 83)
	{
		mod = -1;
	}
}


// $("#canvas").keypress(function(event){
// 	if(event.keyCode == 87)
// 	{
// 		mod = 2;
// 	}
// 	if(event.keyCode == 83)
// 	{
// 		mod = -1;
// 	}
// });
// $("#canvas").keyup(function (event){
//
//
// 		if(event.keyCode == 87 || event.keyCode == 83)
// 		{
//
// 			mod = 0;
// 		}
//
// });
	//if(event.keyCode == 65)
	//{
	//	angle -= 5;
	//}
	//if(event.keyCode == 68)
	//{
	//	angle+=5;
	//}
