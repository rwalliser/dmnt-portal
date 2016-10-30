function Application(name, bez, urls) {
	
	this.name = name; //Name
	this.bez = bez; //Bezeichnung
	this.urls = urls; //URL
	
	this.toRow = function() {
//		row = '<div class="row">';
//		row+= '	<div class="col-sm-2">' + this.name + '</div>';
//	    row+= ' <div class="col-sm-5">' + this.bez + '</div>';
//	    row+= ' <div class="col-sm-5">' + this.url + '</div>';
//	    row+= '</div>';
	    
	    row = '<div class="col-sm-6">';
	    row+= '<div class="panel panel-success">';
	    row+= '<div class="panel-heading">' + this.name + '</div>';
	    row+= '<div class="panel-body"><p>' + this.bez + '</p></div>';	    
	    row+= '  <ul class="list-group">';
	    $.each(this.urls, function(index, item) {
	    	row+= '    <li class="list-group-item"><a href="' + item.url + '">' + item.url + '</a></li>';
	    });
	    row+= '  </ul>';
	    row+= '</div>';
	    row+= '</div>';
	    
	    return row;
	}
}