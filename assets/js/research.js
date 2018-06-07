getResearchData();

//GET request to get all the links from the database
function getResearchData()
{
	var onSuccess = function(data)
	{
		
		var listofTypes = [data['research'][0]['type']];
		console.log(listofTypes);
		
		for(var y=0;y<data['research'].length;y++)
		{
			if(listofTypes.indexOf(data['research'][y]['type']) == -1)
				listofTypes.push(data['research'][y]['type']);
				
		}
		
		console.log(listofTypes);
		var container = document.getElementById('Container_');
		//emptying things out before adding new posts
		container.innerHTML ="";
		

		//get records row by row and lets create new html elements using DOM and inject them to the links.html
		for(var loop=0; loop<listofTypes.length;loop++)
		{
			//making the title for corresponding research areas
			
			container.innerHTML +=  "<div class=\"ResearchTitleSection\" id=\"ResearchTitleSection_\">"+ "<div class=\"container\">" + "<div class=\"Titles\" id=\"Titles_\">" + "Our Contributions in " +listofTypes[loop] + "</div></div></div>";
			var wrapper = "<div class= \"" +listofTypes[loop]+ "\""+ "id=\""+listofTypes[loop]+"_\">";
			var post="";
			var temp=0;
			var runningTotal=0;
			for(var x=0;x<data['research'].length;x++)
			{
				if(data['research'][x]['type'] == listofTypes[loop])
				{
					var name=data['research'][x]['title'];
					var description=data['research'][x]['description'];
					var link_=data['research'][x]['link'];
					console.log(listofTypes[loop] +" - " +name +" - "+ temp + "x="+x);
					if(runningTotal%2 == 0)
					{
						temp++;
						post += "<div class=\"post\"" + "id=\"post_" +temp+"\">"; //creating post wrapper
						post += "<div class=\"container\">" //create container 
						post += "<div class=\"Titles\" id=\"researchTitle_\">"+name+"</div>"; //adding tilte of the research 
						post += "<div class=\"description\" id=\"postDescription_\">"+description+"</div></div></div>"; //adding description of the research 
					}
					else
					{
						post += "<div class=\"post\" id=\"post_odd\">";
						post += "<div class=\"container\">" //create container 
						post+= "<div class=\"Titles\" id=\"researchTitle_odd\">"+name+"</div>"; //adding tilte of the research 
						post+= "<div class=\"description\" id=\"postDescription_odd\">"+description+"</div></div></div>"; //adding description of the research 
					}

					runningTotal++;
				}
			}
			
			console.log("NEW - " + temp +"x="+x);
			container.innerHTML+=wrapper+post;
			if (loop != listofTypes.length - 1){
				container.innerHTML+="</div>" + "<div id=\"arrowDown_\"><img id=\"upArrow\"src=\"assets/images/downicon.png\"></div>";
			}
		}
			

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('research',onSuccess,onFailure);
}