$(document).ready(function(){
	
	console.log(data);
			
	$.each(data, function(index, item){
		var app = new Application(item.name, item.bez, item.urls);
		console.log(app)
		$(".main").append(app.toRow());
	});
	
	
})