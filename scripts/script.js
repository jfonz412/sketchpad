var gridSize = 1; //to double pixel amount, multiply by 4
var draw = false;
var pencil = false;
var rainbow = false;
var erase = false;

$(document).ready(function(){

	//draw the original 16x16 grid
	$('h1').append('<div id="container"></div>');
	for(var i=0;i<(256);i++)
	{
		$('#container').append('<div class="pixel"></div>');
	}
	
	startDraw(); //main drawing controller function

	//turns on and off the different drawing options inside of startDraw();
	shader(); 
	eraser();
	rainbow();

	newSketch(); //erases the grid and creates a new one

});	


/**FUNCTION DEFINITIONS**/
var startDraw = function(){

	$('#container').click(function(){

		draw = !draw;
		
		if (draw === true) 
		{
			$('.pixel').mouseenter(function(){
				if (pencil === true)
				{
					var opacity = parseFloat($(this).css('opacity'));
					if (opacity === 0)
					{
						$(this).css({
							'opacity': 0.1,
							'background-color': 'black'
						});
					}
					else
					{
						opacity += 0.1;
						$(this).css('opacity', opacity);
					}
				}
				else if (rainbow === true)
				{
					//math.random returns random number between 0 and 1 (not 1)
					//math.floor returns a whole number rounded down to the nearest integer
					var r = Math.floor(Math.random() * 255 + 1);
					var g = Math.floor(Math.random() * 255 + 1);
					var b = Math.floor(Math.random() * 255 + 1);
					var randomColor = "rgb(" + r + "," + g + "," + b +")";

					$(this).css({
						'background-color': randomColor,
						'opacity': 1
					});
					return; //draws black unless function is broken
				}
				else if (erase === true)
				{
					$(this).css({
						'background-color': '',
						'opacity': 0
					});
				}
				else
				{
					$(this).css({
						'background-color': 'black',
						'opacity': 1
					});
				}
			});
		}
		else
		{	
			$('.pixel').off('mouseenter');
		}
	});
};

var newSketch = function() {
	$('#new_sketch').click(function(){
		gridSize = prompt("Enter grid size");
		if (gridSize === null)
		{
			return; //checks for canceled prompt
		}

		$('.pixel').remove();

		var pixelSize = 720/gridSize;

		for(var i=0;i<(gridSize*gridSize);i++)
		{
			$('#container').append('<div class="pixel"></div>');
		}

		$('.pixel').height(pixelSize);
		$('.pixel').width(pixelSize);
		console.log("Grid Loaded!");
	})
};

var shader = function() {
	$('#shader').click(function(){
		pencil = !pencil;
		eraser = false;
		rainbow = false;
		if (pencil === true)
		{
			$(this).css('color', 'white');
			$('#eraser').css('color', 'black');
			$('#rainbow').css('color', 'black');
		}
		else
		{
			$(this).css('color', 'black');
		}
	});
};

var rainbow = function() {
	$('#rainbow').click(function(){
		pencil = false;
		eraser = false;
		rainbow = !rainbow;
		if (rainbow === true)
		{
			$(this).css('color', 'white');
			$('#eraser').css('color', 'black');
			$('#shader').css('color', 'black');
		}
		else
		{
			$(this).css('color', 'black');
		}
	});
};

var eraser = function() {
	$('#eraser').click(function(){
		pencil = false;
		erase = !erase;
		rainbow = false;
		if (erase === true)
		{
			$(this).css('color', 'white');
			$('#rainbow').css('color', 'black');
			$('#shader').css('color', 'black');
		}
		else
		{
			$(this).css('color', 'black');
		}
	});
};