//calling this first so we laod every links and stuff as soon as we open the page
getLinks();
//now lets add click events for the circles (aka buttons)
function linkClickEvent(e)
{
	e = e || window.event;
	e = e.target || e.srcElement;
	if(e.id == "globe")
	{
		var num= $(e).attr("name");
		var linkVal = document.getElementById("httpLink_"+num).innerHTML;
		window.open(linkVal, '_blank');
	}
	
	
}



//GET request to get all the links from the database
function getLinks()
{
	var onSuccess = function(data)
	{
		//lets get column one 
		var col1 = document.getElementById("column_1");
		//lets get column two
		var col2 = document.getElementById("column_2");
		//lets get column two
		var col3 = document.getElementById("column_3");
		
		//before start anything lets empty out our columns 
		col1.innerHTML = col2.innerHTML = col3.innerHTML = "";
		
		//lets make constant strings 
		var wrapperBegin = "<div class=\"wrapper\" id=\"wrapper_\">";
		
		
		
		//get records row by row and lets create new html elements using DOM and inject them to the links.html
		for(var x=0;x<data['links'].length;x++)
		{
			var linkName=data['links'][x]['linkName'];
			var linkLocation=data['links'][x]['linkLocation'];
			
			//creating an wrapper div with a name attr so we can identify them
			var circleAndGlobe = "<div class=\"circle\" id=\"circle_\">" + "<div id=\"globe\" name=\""+x+"\" class=\"fa fa-globe\"></div>" + "</div>"
			
			var finalHtmlString = wrapperBegin + circleAndGlobe + "<div class=\"linkText\" id=\"linkText_\">" + linkName + "</div>" + "<div class=\"httpLink\" id=\"httpLink_" +x+"\">" + linkLocation + "</div> </div>";
			
			//now lets add these recod with our dynamically creaeted divs to the above columns
			if(x%3 == 0) //means we are appending to the first column
			{
				col1.innerHTML += finalHtmlString;
			}else if (x%3 == 1) //means we are appending to the column 2
			{
				col2.innerHTML += finalHtmlString;
			}else  //means we are appending to the column 3
			{
				col3.innerHTML += finalHtmlString;
			}
			
		}

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('links',onSuccess,onFailure);
}