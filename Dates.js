// console.clear();
console.log("loaded GigDates.js");
var CollectedMarkup = "";
  
// sort with _createdTime ??
var airtable_read_endpoint =  "https://api.airtable.com/v0/appZAJ6dHd1kPPBTv/GigList?maxRecords=4&view=GridView&api_key=keycXj4YSD4WZj9gy";
var airtable_write_endpoint = "https://api.airtable.com/v0/appZAJ6dHd1kPPBTv/GigList?api_key=keycXj4YSD4WZj9gy";
// var airtable_write_endpoint = "https://api.airtable.com/v0/appnPiAF5nEI3Lu1a/all_poll_data?api_key=keyU4jNgidjWREljE";



/* var GigBuilder1 = '<div class="event row"><div class="col-md-12"><h3 class="eventDate" style="margin: 5px auto">';
// DATE goes here
var GigBuilder2 = '</h3><a href="';
// VWEBSITE goes here
var GigBuilder3 = '" target="_blank"> <h3 class="eventTitle" style="margin: 5px auto"> ';
// VENUE goes here
var GigBuilder4 = '</h3></a>';
// MAP goes here
var GigBuilder5 = '</div></div>';
 */
// testing Coomit from Command line
// testing new branch 
// here isa new edit to the file
// here is another edit to this file from the master branch 


var GigBuilder1 = '<div class="event row" style="text-align: center"><div class="col-md-12"><a href="';
// VWEBSITE goes here
var GigBuilder2 = '" target="_blank"> <img style="margin: 70px auto 10px auto; width: 250px;" src="';
// LOGO goes here
var GigBuilder3 = '"></a><h3 style="margin: -5px auto 0 auto">';
// DATE goes Here
// TIME goes here
var GigBuilder4 = '</h5><a style="margin: 0 auto 50px auto" href="';
// MAP goes here
var GigBuilder5 = '" target="_blank">';
// ADDRESS goes here
var GigBuilder6 = '</a></div></div>';



	
	
function getDataAndBuild() { 
  console.log("Getting data");
  axios
    .get(airtable_read_endpoint)
    .then(function(result) {
      console.log("Got data (showing first record of " + result.data.records.length + "): ", result.data.records[0] );
	  
	  var i;
	  for (i = 0; i < result.data.records.length; i++) {
			// define holders
			var MyMap = result.data.records[i].fields.OptionalGoogleMap;
			var MyVenueSite = result.data.records[i].fields.VenueWebSite;
			var MyVenueName = result.data.records[i].fields.VenueName;
			var VenueAddress = result.data.records[i].fields.VenueAddress;
			var SystemDate = result.data.records[i].fields.DateScheduled;
			var MyDate = result.data.records[i].fields.GigDate;
			var MyTime = result.data.records[i].fields.GigTime;
			var Image = result.data.records[i].fields.ImgURL;
				// format to get just the URL 
				  Image = Image.split("(");
				  Image = Image[1];
				  Image = Image.split(")");
				  Image = Image[0];
	  
			var MyResult = GigBuilder1 + MyVenueSite + GigBuilder2 + Image + GigBuilder3 +  MyVenueName + "<br><h4 style='margin: 0'>" + MyDate + "</h4>" + GigBuilder4 + MyMap + GigBuilder5 + VenueAddress + GigBuilder6;
			console.log(MyResult);
			//if (result.data.records[i].fields.Confirmed){   //removing this filter for Michael Grimes Bass Site 
				CollectedMarkup += MyResult;
			//}

	  }
	  // insert into DOM 
	  $('#AirTableGigs').html(CollectedMarkup);
    }); 
}


// marks? get set, go!
getDataAndBuild();
