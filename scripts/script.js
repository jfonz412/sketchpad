var gridSize = 1; //to double pixel amount, multiply by 4
var draw = false;
var pencil = false;
var rainbow = false;
var erase = false;

$(document).ready(function(){

	//draw the original 16x16 grid
	$('body').append('<div id="container"></div>');
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
					//shader code goes here, below does not work
					$(this).css({
						'opacity': .1,
						'background-color': 'black'
					});
					var op = $(this).css('opacity');
					if (op < 1)
					{
						var newOp = op*2;
						$(this).css('opacity', newOP);
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

					$(this).css('background-color', randomColor);
					return; //draws black unless function is broken
				}
				else if (erase === true)
				{
					$(this).css('background-color', '');
				}
				else
				{
					$(this).css('background-color', 'black');
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
	});
};

var rainbow = function() {
	$('#rainbow').click(function(){
		pencil = false;
		eraser = false;
		rainbow = !rainbow;
	});
};

var eraser = function() {
	$('#eraser').click(function(){
		pencil = false;
		erase = !erase;
		rainbow = false;
	});
};