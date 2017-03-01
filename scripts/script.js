$(document).ready(function(){

	$('body').append('<div id="container"></div>');
	$('container').append('<ul></ul>');
	for(var i=0;i<256;i++)
	{
		$('#container').append('<div class="pixel"></div>');
	}

});	

