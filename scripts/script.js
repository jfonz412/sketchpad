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
});	



var startDraw = function(){

	$('html').click(function(){

		draw = !draw;
		
		if (draw === true) 
		{
			$('.pixel').mouseenter(function(){
				$(this).css('background-color','black');
				$(this).addClass('painted');
				$(this).removeClass('pixel');
			});

		}
		else (draw === false)
		{	
			$('.pixel').mouseenter(function(){
				$(this).css('background-color', '');
			});
		}
	});
};


