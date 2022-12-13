var request = new XMLHttpRequest();

request.open("GET", "https://api.vam.ac.uk/v2/objects/search?q='china'");
var imageTag = "";
request.onload = function () {

	var response = request.response; 
	// console.log(response);
	
	 var parsedData = JSON.parse(response);
	// console.log(parsedData.records);
	parsedData.records.forEach(record => {
		/* ------------ Smaller Images ------------*/
		// if(record._primaryImageId != null){
		// 	 console.log(record);
		// 	imageUrl = record._images._primary_thumbnail;

		// 	imageTag += "<img src='" + imageUrl + "'  >";
		// }
		/* ----------------------------------------*/

		/* ------------ Larger Images ------------*/
		if(record._primaryImageId != null){
		   console.log(record);
		   imageUrl = record._images._iiif_image_base_url;

		   imageTag += "<img src='" + imageUrl + "full/!300,300/0/default.jpg'  >";
	   }
	});
	 document.getElementById("holder").innerHTML = imageTag;
};

request.send();