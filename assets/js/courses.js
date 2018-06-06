//setting up course table with dataTables plugin
var dataTable = $('#courseTable_').DataTable(
	{
		"pageLength": 10,
		"bPaginate": true,
		"bLengthChange": false,
		"bFilter": true,
		"bInfo": false,
		"bAutoWidth": false,
		responsive: true
		
	});
//applying changes 
$(document).ready(dataTable);
//making link and description column invisible
dataTable.column(3).visible(false);
dataTable.column(4).visible(false);

//AJAX request to backend to get course data 
getCourses();
//lets fill the course details section with 0th row details at the beginnig
fillData(dataTable.row( 0 ).data())

//handeling click events on rows
dataTable.on('click', 'tr', function () {
		fillData(dataTable.row( this ).data());
} );

//this function will fill up the course details section according to the given data
function fillData(data)
{
		//adding course title
	   var div = document.getElementById('title_');
	   div.innerHTML = "<h4>"+data[0]+" - "+data[1]+"</h4>";
	   //adding course description
	   var description = document.getElementById('description_');
	   description.innerHTML = data[3];
	   
	   //getting the corresponding div element where we append course link 
	   var webpage = document.getElementById('webpage');
	   
       if(data[4] != null)
	   {
		   webpage.innerHTML = "<a href=" + data[4]+ "><i class=\"fa fa-globe\"></i> Visit class web page (" + data[2]+") </a>";
	   }else //just empty it out if the link doesnt exists in the database
	   {
		   webpage.innerHTML = "";
	   } 
}

//GET request to get all the courses from the database
function getCourses()
{
	var onSuccess = function(data)
	{
		//get the table element from html page
		var table = $('#courseTable_').DataTable();
		//clear the table before addinig anything
		table.clear();
		//adding the courses to the table
		for(var x=0;x<data['courses'].length;x++)
		{
			var courseNumber =data['courses'][x]['courseNumber'];
			var courseTitle=data['courses'][x]['courseTitle'];
			var offeredQuarter=data['courses'][x]['offeredQuarter'];
			var description =data['courses'][x]['description'];
			var link_ =data['courses'][x]['link'];
			table.row.add([courseNumber,courseTitle,offeredQuarter,description,link_]).draw();
		}

	}
	
	var onFailure = function()
	{
		console.log("Backend error");
	}
	
	makeGetRequest('courses',onSuccess,onFailure);
}

