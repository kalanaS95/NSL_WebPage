//calling this first so we laod every tools and stuff as soon as we open the page
gettools();

//GET request to get all the tools from the database
function gettools()
{
	var onSuccess = function(data)
	{
		//get tool_panel div 
        var tool_panel = document.getElementById("tool-panel");
        
		
		//before start anything lets empty out tool_panel
		tool_panel.innerHTML = "";
		
		//lets make constant strings 
		var wrapperBegin = "<div class=\"panel panel-default\" id=\"main_panel\">";
		
		
		
		//get records row by row and lets create new html elements using DOM and inject them to the tools.html
		for(var x = 0; x < data['tools'].length; x++)
		{
			var toolTitle = data['tools'][x]['toolTitle'];
            var toolDescription = data['tools'][x]['toolDescription'];
            var toolImage = data['tools'][x]['toolImage'];
            var titleWrapper = "<div class=\"panel-heading\" >";
            var finalHtmlString = "";
            if (toolImage != null) {
                var descriptionWrapper = "<div class=\"panel-body\"><div class=\"row\"><div class=\"col-xs-12 col-sm-8 col-md-9\">";
                var imageWrapperLeft = "<div class=\"col-xs-12 col-sm-4 col-md-3\"><img src=\"";
                var imageWrapperRight = "\" alt=\"image\"></div>";
                finalHtmlString = wrapperBegin + titleWrapper + toolTitle + "</div>" + descriptionWrapper + toolDescription + "</div>" + 
                                  imageWrapperLeft + toolImage + imageWrapperRight + "</div> </div> </div>";
                
            } else {
                 var descriptionWrapper = "<div class=\"panel-body\">";
                 finalHtmlString = wrapperBegin + titleWrapper + toolTitle + "</div>" + descriptionWrapper + toolDescription + "</div> </div>";
                 
            } 
            tool_panel.innerHTML += finalHtmlString;
			
		}

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('tools',onSuccess,onFailure);
}