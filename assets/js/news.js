

getNews();
		  
//GET request to get all the news from the database
function getNews()
{
	
	var onSuccess = function(data)
	{
		//lets get column one 
		var container = document.getElementById("container_");

		
		//before start anything lets empty out our container 
		container.innerHTML = "";
		
		//making first <div class="timeline-item">
		var firstPart = "<div class=\"timeline-item\">" + "<div class=\"timeline-img\"></div>";
		


		//get records row by row and lets create new html elements using DOM and inject them to the links.html
		for(var x=0;x<data['news'].length;x++)
		{

			var title=data['news'][x]['title'];
			var description=data['news'][x]['description'];
			var date=GMTtoDate(data['news'][x]['date']);		
			var image1=data['news'][x]['image1'];
			var imgDes1=data['news'][x]['imgDes1'];
			var image2=data['news'][x]['image2'];
			var imgDes2=data['news'][x]['imgDes2'];
			var links=data['news'][x]['links'];


			//this class tag consists of the animation call using JS
			var animationClass = "";
			var classAddition= false;
			
			if(x%2 == 0) //these posts goes to left sidebar
			{
				classAddition = true;
				animationClass = "<div class=\"timeline-content js--fadeInLeft\">";
			}else //these posts goes to right
			{
				classAddition = false;
				animationClass = "<div class=\"timeline-content js--fadeInRight\">";
			}
				
				
			//making title tag
			var titleH2="";
			if(classAddition)
				titleH2 = "<div class=\"title_left\">"+title+"</div>";
			else
				titleH2 = titleH2 = "<div class=\"title_right\">"+title+"</div>";
			
			//making the div corresponds to time/date
			var dateTime = "<div class=\"date\">"+date+"</div>";
			//now lets make content div including paragraph tag
			var contentDescription = "<div class= \"content\" id=\"content_\">" + "<p>" + description + "</p> </div>";
			//now lets make the first image tag if exists
			var image1_src="";
			//final HTML string
			var finalHTML = firstPart+animationClass+titleH2+dateTime+contentDescription;
			if(image1 != null)
				finalHTML += "<img src=" + " \"" + image1 + " \">";
				
			//making image description 1
			if(imgDes1!=null)
				finalHTML+= "<div class=\"imgDiscription\" id=\"imgDiscription\">" +imgDes1 + "</div>";
			//now lets make the second image tag if exists
			var image2_src=" ";
			if(image2 != null)
				finalHTML+= "<img src=" + " \"" + image2 + " \">";	
			//making image description 2
			if(imgDes2!=null)			
				finalHTML += "<div class=\"imgDiscription\" id=\"imgDiscription\">" +imgDes2 + "</div>";
			//adding links
			if(links!=null)
			{
				var jsonObj = $.parseJSON(links);
				var linksHTML = "";
				//now lets create all the link divs !
				for(var y=0; y<jsonObj.length; y++)
				{
					console.log(jsonObj[y]['link'] + "---" + jsonObj[y]['description']);
					linksHTML+= "<div class=\"infoLink\"><i class=\"fa fa-globe\"></i> <a id=\"anchorLink\" href=\"" + jsonObj[y]['link'] + "\">" + jsonObj[y]['description'] + "</a></li></div>";
				}
				
					
				//finally append these to the final HTML string
				finalHTML+=linksHTML;
			}
				
			
			container.innerHTML += finalHTML+"</div></div>";
			
		}

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('news',onSuccess,onFailure);
}

