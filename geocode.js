function search_loc(){
	var keyword=document.getElementById('txt_loc').value;
	var div_kq=document.getElementById('kq');
	div_kq.innerHTML='<img src="http://dothanhlong.org/demo/geocoding/quiz-loading.gif">';
	if(keyword!=''){		
		$.ajax({
		  url : "https://nominatim.openstreetmap.org/search?q="+keyword+"&format=json&polygon=1&addressdetails=1",
		  dataType : "json",
		  success : function(parsed_json) {
			var html='';
			html+='<h1>Kết quả tìm kiếm</h1>';
			var maxi=parsed_json.length;
			var display_name='';
			var lat='';
			var lon='';
			var type='';
			var boundingbox='';
			var bbox='';
			for(i=0;i<maxi;i++){
				lat=parsed_json[i].lat;
				lon=parsed_json[i].lon;
				display_name=parsed_json[i].display_name;
				boundingbox=parsed_json[i].boundingbox;
				bbox=boundingbox[2]+','+boundingbox[0]+','+boundingbox[3]+','+boundingbox[1];
				type=parsed_json[i].type;
				html+='<div class="result highlight" data-position="'+i+'">';
				html+='<span class="name">'+display_name+'</span> <span class="type">('+type+')</span>';
				html+='<br>';
				html+='lon:'+lon;
				html+='<br>';
				html+='lat:'+lat;
				html+='</div>';
			}
			//var boundingbox = parsed_json['boundingbox'];
			  
			  
			  
			  div_kq.innerHTML=html;
		  }
		});
	}else{
		markers.clearMarkers();
	}
}
function runScript(e) {
	//alert(e.keyCode);
	if (e.keyCode == 13) {
		search_loc();
		//jQuery("#result").fadeOut();
	}
}