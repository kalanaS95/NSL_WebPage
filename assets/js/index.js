
getNews_4();

//GET request to get all the links from the database
function getNews_4()
{
	var onSuccess = function(data)
	{
	
		
		var LeftBigColumn = document.getElementById('LeftBigColumn'); //empty it out just in case
		LeftBigColumn.innerHTML = "";
		var singleRightSmallColumn = document.getElementById('singleRightSmallColumn'); //empty it out just in case
		singleRightSmallColumn.innerHTML = "";
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
			
			if(x==0) //means this is the column on left 
			{

				//lets start adding things
				var first = "<div class=\"single_news_content_left\" id=\"single_news_content_left_\">" + "<div class=\"news_content_left_thumbnail\">";
				//if image is not null use the given image other wise use the default one
				var images_="";
				if(image1!= null)
					images_= "<img src=\"data:image/png;base64,"+ image1+ "\"alt=\"\" /> </div>";
				else
					images_= "<img src=\"assets/images/default_news.png\" alt=\"\" /> </div>";
				
				
				var third= "<div class=\"news_content_left_content\">";
				//adding the title
				var forur= "<p class=\"subtitle\">" + title + "</p>";
				//adding seperator
				var five= "<div class=\"separator2\"></div>";
				//adding description
				var six= "<p>" +description+"</p>";
				var seven= "<div class=\"news_content_left_bottom\">";
				//adding date
				var eight= "<a class=\"news_icon\" href=\"\"><i class=\"fa fa-calendar\"></i>" + date;
				var final_HTML="</div></div></div>";
				LeftBigColumn.innerHTML =first+images_+third+forur+five+six+seven+eight+final_HTML;
	
			}else
			{
				var first_ = "<div class=\"single_news_right_content\">" + "<div class=\"row\">" + "<div class=\"col-sm-3 col-xs-3 no-padding\">"+ "<div class=\"single_right_img\">";
				//if image is not null use the given image other wise use the default one
				var images__="";
				if(image1!= null)
					images__= "<img src=\"data:image/png;base64,"+ image1+ "\"alt=\"\" /> </div> </div>";
				else
					images__= "<img src=\"assets/images/default_news.png\" alt=\"\" /> </div> </div>";
				
				var third_ = "<div class=\"col-sm-9 col-xs-9 no-padding\">"+ "<div class=\"single_right_content\">";
				
				var four_ = "<p class=\"subtitle\">" + title + "</p>";
				var five_ = "<a class=\"news_icon\" href=\"\"><i class=\"fa fa-calendar\"></i>" + date + "</a> </div> </div> </div> </div>";
	
				var final_ = first_+images__+third_+four_+five_;
				singleRightSmallColumn.innerHTML  += final_;
			}
			
			
		}

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('news_4',onSuccess,onFailure);
}