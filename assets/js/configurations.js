var baseURL = 'http://127.0.0.1:5000/api/';

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