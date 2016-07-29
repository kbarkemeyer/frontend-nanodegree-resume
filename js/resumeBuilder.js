/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Shiloh Shake",
	
	"role": "German Professor/ Aspiring Software Developer",
	
	"skills": ["German Philosophy and Literature", "Teaching German", "Python", "SQL"],
	
	"biopic": "images/Shiloh_shake.JPG",
	
	"welcomeMessage": "Hen diapheron heautoi",
	
	"contacts": {
		"mobile": "123-456-7890",
		"email": "shiloh@domain.com",
		"gitHub": "shiloh_gitHub",
		"location": "West Linn, Oregon",
		},
	
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var picture = HTMLbioPic.replace("%data%", bio.biopic);
		var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(picture);
		$("#header").append(message);

		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}

			
		};

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#topContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);
		
	}

}

var education = {
	"schools": [
		{
		"name": "Georg-August-Universität Göttingen",
		"location": "Göttingen, Germany",
		"degree": "Masters",
		"date": "1994",
		"major": ["German literature and linguistics"]
		},
		{
		"name": "UC Santa Barbara",
		"location": "Santa Barbara, CA",
		"degree": "PhD",
		"date": "2001",
		"major": ["German literature and philosophy"]
		}
	],

	"onlineCourses": [
		{
		"title": "Intro to Computer Science",
		"school": "Udacity",
		"date": "2015",
		"url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
		},
		{
		"title": "Intro to Algorithms",
		"school": "Udacity",
		"date": "2016",
		"url": "https://classroom.udacity.com/courses/cs215/lessons/48747095/concepts/486916070923#"
		}
	],


	"display": function() {

		
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			$(".education-entry:last").append(formattedName, formattedLocation, formattedDegree, formattedDate, formattedMajor);
		}

		$("#education").append(HTMLonlineClasses)

		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$(".education-entry:last").append(formattedTitle, formattedSchool, formattedDate, formattedUrl);
			$(".education-entry:last").children('a').attr('href', education.onlineCourses[course].url);	
		}
	}
}

	

var work = {
	"jobs": [
		{
		"employer": "University of Missouri",
		"title": "Assistant Professor",
		"location": "Columbia, MO",
		"dates": "2001-2003",
		"description": "Taught graduate and undergraduate classes in German literature and philosophy"
		},
		{
		"employer": "Oregon State University",
		"title": "Instructor",
		"location": "Corvallis, OR",
		"dates": "2011-2012",
		"description": "Taught undergraduate classes in German language and literature"
		},
		{
		"employer": "Willamette University",
		"title": "Visiting Assistant Professor",
		"location": "Salem, OR",
		"dates": "2012-2015",
		"description": "Taught undergraduate classes in German language and literature"
		}
	],

	"display": function() {

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployerTitle);			
			$(".work-entry:last").append(formattedDates);			
			$(".work-entry:last").append(formattedDescription);
		}

	}
}

var projects = {
	"projects": [
		{
		"title": "Versuche des Mitseins: Hölderlin, Heidegger und die Gemeinschaft der Sterblichen",
		"dates": "June 2001" ,
		"description": "Doctoral Dissertation, German Philosophy" , 
		"images": ["images/Hoelderlin.jpg",]
		}
	],

	"display" : function() {
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name){
	name = name.split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	var intName = name[0] + " " + name[1];
	return intName;
}




bio.display();
education.display();
work.display()
projects.display();

$("#mapDiv").append(googleMap);


