getfacultyMembers();
getMembers();
getAlums();

//GET request to get all the details of the people from the database
function getfacultyMembers()
{
	var onSuccess = function(data)
	{
		var column = document.getElementById('facultyRow');
		
		
		//empty out every thing
		column.innerHTML = "";
		
		

		//constant HTML tag parts
		var card = "<div class=\"col-xs-12 col-sm-6 col-md-4\"><div class=\"card\">";
		var detailContainer = "<div class=\"detailcontainer\">";
		
		
		//get records row by row and lets create new html elements using DOM and inject them to the links.html
		for(var x=0;x<data['people'].length;x++)
		{
			var name=data['people'][x]['name'];
			var description=data['people'][x]['description'];
			var webpage=data['people'][x]['webpage'];
			var email=data['people'][x]['email'];
			var linkedin=data['people'][x]['linkedin'];
			var image_=data['people'][x]['image'];
			
			
			var imagetag = "<img src=" + "\"data:image/png;base64," + image_ + "\"" + "style=\"width:100%\">";
			var name_ = "<div id=\"name\"><b>"+name+"</b></div>";
			var description_ = "<div id=\"description\">"+description+"</div>";
			
			var webpage_ = "";
			if(webpage != null)
				webpage_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-globe\"></i>"+ "<a id=\"webpageLink\" href=\"" +webpage+"\"" + ">Web Page</a>" + "</div>";
			else
				webpage_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-globe\"></i>"+ "<a id=\"webpageLink\" href=\"" +""+"\"" + ">Web Page</a>" + "</div>";
			
			var email_ = "";
			if(email != null)
				email_ = "<div class=\"sitelinks\" id=\"email_\"><i id=\"icons_\" class=\"fa fa-envelope\"></i>"+email+"</div>";
			else
				email_ = "<div class=\"sitelinks\" id=\"email_\"><i id=\"icons_\" class=\"fa fa-envelope\"></i>"+"Email"+"</div>";
			
			var linked_ = "";
			if(linkedin != null)
				linked_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-linkedin-square\"></i>"+ "<a id=\"LinkedInLink\" href=\"" +linkedin+"\"" + ">LinkedIn</a>" + "</div>";
			else
				linked_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-linkedin-square\"></i>"+ "<a id=\"LinkedInLink\" href=\"" +""+"\"" + ">LinkedIn</a>" + "</div>";
			
			var finalHTML = card+imagetag+detailContainer+name_+description_+webpage_+email_+linked_+"</div></div></div>";

			column.innerHTML+= finalHTML;
		}

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('facultyMembers',onSuccess,onFailure);
}


function getMembers()
{
	var onSuccess = function(data)
	{
		var column = document.getElementById('membersRow');
		
		
		//empty out every thing
		column.innerHTML = "";
		
		

		//constant HTML tag parts
		var card = "<div class=\"col-xs-12 col-sm-6 col-md-4\"><div class=\"card\">";
		var detailContainer = "<div class=\"detailcontainer\">";
		
		
		//get records row by row and lets create new html elements using DOM and inject them to the links.html
		for(var x=0;x<data['people'].length;x++)
		{
			var name=data['people'][x]['name'];
			var description=data['people'][x]['description'];
			var webpage=data['people'][x]['webpage'];
			var email=data['people'][x]['email'];
			var linkedin=data['people'][x]['linkedin'];
			var image_=data['people'][x]['image'];
			
			
			var imagetag = "<img src=" + "\"data:image/png;base64," + image_ + "\"" + "style=\"width:100%\">";
			var name_ = "<div id=\"name\"><b>"+name+"</b></div>";
			var description_ = "<div id=\"description\">"+description+"</div>";
			
			var webpage_ = "";
			if(webpage != null)
				webpage_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-globe\"></i>"+ "<a id=\"webpageLink\" href=\"" +webpage+"\"" + ">Web Page</a>" + "</div>";
			else
				webpage_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-globe\"></i>"+ "<a id=\"webpageLink\" href=\"" +""+"\"" + ">Web Page</a>" + "</div>";
			
			var email_ = "";
			if(email != null)
				email_ = "<div class=\"sitelinks\" id=\"email_\"><i id=\"icons_\" class=\"fa fa-envelope\"></i>"+email+"</div>";
			else
				email_ = "<div class=\"sitelinks\" id=\"email_\"><i id=\"icons_\" class=\"fa fa-envelope\"></i>"+"Email"+"</div>";
			
			var linked_ = "";
			if(linkedin != null)
				linked_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-linkedin-square\"></i>"+ "<a id=\"LinkedInLink\" href=\"" +linkedin+"\"" + ">LinkedIn</a>" + "</div>";
			else
				linked_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-linkedin-square\"></i>"+ "<a id=\"LinkedInLink\" href=\"" +""+"\"" + ">LinkedIn</a>" + "</div>";
			
			var finalHTML = card+imagetag+detailContainer+name_+description_+webpage_+email_+linked_+"</div></div></div>";

			column.innerHTML+= finalHTML;
		}

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('currentMembers',onSuccess,onFailure);
}


function getAlums()
{
	var onSuccess = function(data)
	{
		var column = document.getElementById('alumsRow');
		
		
		//empty out every thing
		column.innerHTML = "";
		
		

		//constant HTML tag parts
		var card = "<div class=\"col-xs-12 col-sm-6 col-md-4\"><div class=\"card\">";
		var detailContainer = "<div class=\"detailcontainer\">";
		
		
		//get records row by row and lets create new html elements using DOM and inject them to the links.html
		for(var x=0;x<data['people'].length;x++)
		{
			var name=data['people'][x]['name'];
			var description=data['people'][x]['description'];
			var webpage=data['people'][x]['webpage'];
			var email=data['people'][x]['email'];
			var linkedin=data['people'][x]['linkedin'];
			var image_=data['people'][x]['image'];
			
			
			var imagetag = "<img src=" + "\"data:image/png;base64," + image_ + "\"" + "style=\"width:100%\">";
			var name_ = "<div id=\"name\"><b>"+name+"</b></div>";
			var description_ = "<div id=\"description\">"+description+"</div>";
			
			var webpage_ = "";
			if(webpage != null)
				webpage_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-globe\"></i>"+ "<a id=\"webpageLink\" href=\"" +webpage+"\"" + ">Web Page</a>" + "</div>";
			else
				webpage_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-globe\"></i>"+ "<a id=\"webpageLink\" href=\"" +""+"\"" + ">Web Page</a>" + "</div>";
			
			var email_ = "";
			if(email != null)
				email_ = "<div class=\"sitelinks\" id=\"email_\"><i id=\"icons_\" class=\"fa fa-envelope\"></i>"+email+"</div>";
			else
				email_ = "<div class=\"sitelinks\" id=\"email_\"><i id=\"icons_\" class=\"fa fa-envelope\"></i>"+"Email"+"</div>";
			
			var linked_ = "";
			if(linkedin != null)
				linked_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-linkedin-square\"></i>"+ "<a id=\"LinkedInLink\" href=\"" +linkedin+"\"" + ">LinkedIn</a>" + "</div>";
			else
				linked_ = "<div class=\"sitelinks\" id=\"website_\"><i id=\"icons_\" class=\"fa fa-linkedin-square\"></i>"+ "<a id=\"LinkedInLink\" href=\"" +""+"\"" + ">LinkedIn</a>" + "</div>";
			
			var finalHTML = card+imagetag+detailContainer+name_+description_+webpage_+email_+linked_+"</div></div></div>";

			column.innerHTML+= finalHTML;
		}
	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('alums',onSuccess,onFailure);
}