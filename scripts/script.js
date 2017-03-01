var gridSize = 1; //to double pixel amount, multiply by 4
var pixelSize = 1; //to double pixel amount, divide in half

$(document).ready(function(){

	$('body').append('<div id="container"></div>');
	for(var i=0;i<(256*gridSize);i++)
	{
		$('#container').append('<div class="pixel"></div>');
	}
	startDraw();
});	

var startDraw = function(){
	/*start drawing*/
	$('#container').click(function(){
		$('.pixel').mouseenter(function(){
			$(this).css('background-color','black');
		});
		
	});
};
