var baseURL = 'https://nsl-database.herokuapp.com/api/';
//var baseURL = 'http://127.0.0.1:5000/api/';

function fullMonth(month)
{
	switch(month)
	{
	case "Jan": return "January ";
	case "Feb": return "February ";
	case "Jan": return "March ";
	case "Mar": return "April ";
	case "May": return "May ";
	case "Jun": return "June ";
	case "Jul": return "July ";
	case "Aug": return "August ";
	case "Sep": return "September ";
	case "Oct": return "October ";
	case "Nov": return "November ";
	case "Dec": return "December ";
	}
}

function GMTtoDate(date)
{
	var day= date.split(",");
			
	var dateArray = day[1].split(" ");
	return fullMonth(dateArray[2])+dateArray[1]+", "+dateArray[3];

}

  
  
// Template POst request Ajax call
var makePostRequest = function(url, data, onSuccess, onFailure) {
        $.ajax({
			async:false,
            type: 'POST',
            url: baseURL + url,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: onSuccess,
            error: onFailure
        });
    };
	
	
// Template Delete request Ajax call
var makeDeleteRequest = function(url, data, onSuccess, onFailure) {
        $.ajax({
			async:false,
            type: 'DELETE',
            url: baseURL + url,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
            success: onSuccess,
            error: onFailure
        });
    };	
	
// Template GET request Ajax call
   var makeGetRequest = function(url, onSuccess, onFailure) {
       $.ajax({
		   async:false,
           type: 'GET',
           url: baseURL + url,
           dataType: "json",
           success: onSuccess,
           error: onFailure
       });
   };