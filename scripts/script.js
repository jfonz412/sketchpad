var gridSize = 1; //to double pixel amount, multiply by 4
var pixelSize = 1; //to double pixel amount, divide in half
var draw = false;

$(document).ready(function(){

	$('body').append('<div id="container"></div>');
	for(var i=0;i<(256*gridSize);i++)
	{
		$('#container').append('<div class="pixel"></div>');
	}
	
	startDraw();

	$('#new_sketch').click(function(){
		$('.pixel').remove();
		console.log("Grid Cleared");
		

		//testing add grid back--WORKS!
		gridSize = prompt("Enter grid size 1-4");
		pixelSize = .5;
		for(var i=0;i<(256*gridSize);i++)
		{
			$('#container').append('<div class="pixel"></div>');
		}
		console.log("Grid re-created");
		//end testing
	})

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


