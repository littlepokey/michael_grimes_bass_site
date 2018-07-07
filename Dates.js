// console.clear();
console.log("loaded GigDates.js");
var CollectedMarkup = "";
  
// sort with _createdTime ??
var airtable_read_endpoint =  "https://api.airtable.com/v0/appZAJ6dHd1kPPBTv/GigList?maxRecords=100&view=GridView&api_key=keycXj4YSD4WZj9gy";
var airtable_write_endpoint = "https://api.airtable.com/v0/appZAJ6dHd1kPPBTv/GigList?api_key=keycXj4YSD4WZj9gy";
// var airtable_write_endpoint = "https://api.airtable.com/v0/appnPiAF5nEI3Lu1a/all_poll_data?api_key=keyU4jNgidjWREljE";


var GigBuilder1 = '<div class="w3-third w3-margin-bottom"><img src="./';
//image name goes here 
var GigBuilder2 = '" alt="';
// alt text goes here 
var GigBuilder3 = '" class="w3-hover-opacity gig-tile"><div class="w3-container w3-white" style="margin-top:0px;><strong>';
//venue goes here 
var GigBuilder4 = '</strong><p class="w3-opacity">';
// date goes here 
var GigBuilder5 = '</p><p><strong>';
// venue goes here
var GigBuilder6 = '</strong><br>';
// address goes here 
var GigBuilder7 = '</p><a href="';
// google maps link goes here 
var GigBuilder8 = '" target="_blank"><button class="w3-btn w3-margin-bottom">Map</button></a></div></div>'


	
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
			var MyLogo = result.data.records[i].fields.LogoURL;

			var MyResult = GigBuilder1 + MyLogo + GigBuilder2 + MyVenueName + GigBuilder3 + MyVenueName + GigBuilder4 + MyDate + GigBuilder5 + MyVenueName + GigBuilder6 + VenueAddress + GigBuilder7 + MyMap + GigBuilder8;
			console.log('loaded event ' +  i);
			if (result.data.records[i].fields.Confirmed){
				CollectedMarkup += MyResult;
			}

	  }
	  // insert into DOM 
	  $('#AirTableGigs').html(CollectedMarkup);
    }); 
}


// marks? get set, go!
getDataAndBuild();
