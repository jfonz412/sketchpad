var gridSize = 1; //to double pixel amount, multiply by 4
var draw = false;

$(document).ready(function(){

	$('body').append('<div id="container"></div>');
	for(var i=0;i<(256);i++)
	{
		$('#container').append('<div class="pixel"></div>');
	}
	
	startDraw();
	newSketch();

});	



var startDraw = function(){

	$('#container').click(function(){

		draw = !draw;
		
		if (draw === true) 
		{
			$('.pixel').mouseenter(function(){
				$(this).css('background-color','black');
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
