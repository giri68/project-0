$(window).ready(function()
{
	x = 30;
	y = 30;
	speed = 5;
	angle = 0;
	mod = 0;


	canvas1 = document.getElementById("canvas1");

	context1 = canvas1.getContext("2d");

		car1 = new Image();
		car1.src = "car5.png"
		//wrap in document.on

		window.addEventListener("keydown", keypress_handler1, false);
		window.addEventListener("keyup", keyup_handler1, false);


	var move1 = setInterval(function()
	{
		draw1();
	}, 30);
});





function draw1()
{

context1 = canvas1.getContext("2d");

context1.clearRect(0, 0, 1200, 1200);

//context.fillStyle = "rgb(200, 100, 220)";
//context.fillRect(50, 50, 100, 100);

x += (speed*mod) ;//* Math.cos(Math.PI/180 * angle);
//y += (speed*mod) ;//* Math.sin(Math.PI/180 * angle);


context1.save();

context1.translate(x, y);
//context.rotate(Math.PI/180 * angle);

context1.drawImage(car1, -(car1.width/2), -(car1.height/2));

context1.restore();
}


function keyup_handler1(event)
{
	if(event.keyCode == 75 || event.keyCode == 76)
	{
		mod = 0;
	}
}



	function keypress_handler1(event)
	{
		console.log(event.keyCode);
		if(event.keyCode == 75)
		{
			mod = 2;
		}
		if(event.keyCode == 76)
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
