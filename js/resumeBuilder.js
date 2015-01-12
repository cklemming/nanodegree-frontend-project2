var c = "%contact%";
var d = "%data%";

var bio = {
	"name" : "Christoffer Klemming",
	"role" : "Product Marketing Manager",
	"contact" : {
		"email" : "c.klemming@gmail.com",
		"phone" : "650 960 6879",
		"linkedIn" : "www.linkedin.com/in/christofferklemming",
		"location" : "San Francisco"
	},
	"pictureURL" : "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/27d/05e/1470bfa.jpg",
	"skills" : ["Marketing", "Website Optimization", "SEM", "SEO", "Project Management"],
	"welcomeMessage" : "Welcome! I'm Christoffer, your friendly Growth Hacker and Conversionista, at your service.",
	"display" : function(){
		$("#header").append(HTMLheaderName.replace(d, bio.name));
		$("#header").append(HTMLheaderRole.replace(d, bio.role));
		$("#header").append(HTMLheaderContacts);
		for (var i in bio.contact) {
		    $('#topContacts').append(HTMLcontactGeneric.replace(d, bio.contact[i]).replace(c, i));
		}
		$("#header").append(HTMLbioPic.replace(d, bio.pictureURL));
		$("#header").append(HTMLWelcomeMsg.replace(d, bio.welcomeMessage));
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for(skill in bio.skills){
				$("#skills").append(HTMLskills.replace(d, bio.skills[skill]));
			}
		}
	}
};

var work = {
	"jobs" : [
		{	
		"company" : "Google",
		"position" : "Prouct Marketing Manager",
		"dates" : "January 2010 - future",
		"city" : "San Francisco, USA",
		"description" : "Leading Google's small business marketing web strategy with millions of monthly visitors. Responsible for site strategy, user experience, design, content strategy, conversion optimization and development prioritization. Fundamentally, making sure Google has beautiful, thoughtful and top performing websites, putting the wonders of our SMB products front and centre."
		},
		{	
		"company" : "SJM",
		"position" : "Development Engineer",
		"dates" : "January 2008 - December 2009",
		"city" : "Stockholm, Sweden",
		"description" : "Worked as a Software Verification Engineer for a programmer applications for Pacemaker and ICD systems. Software was developed in cross functional teams with requirement, development and verification engineering, using Agile development methods (SCRUM). Main responsibilities included; designing and implementing test strategy, automate testing procedures, managing exploratory testing projects, integrations testing and also leading regression test runs."
		}
	],
	"display" : function(){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace(d, work.jobs[job].company);
			var formattedTitle = HTMLworkTitle.replace(d, work.jobs[job].position);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(HTMLworkDates.replace(d, work.jobs[job].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace(d, work.jobs[job].city));
			$(".work-entry:last").append(HTMLworkDescription.replace(d, work.jobs[job].description));
		}
	}
};

var education = {
	"schools" : [
		{
			"name" :  "Royal Institute of Technology",
			"city" : "Stockholm, Sweden",
			"degree" : "MSc",
			"major" : "Industrial Engineering",
			"gradYear" : 2010
		},
		{
			"name" :  "Stockholm University",
			"city" : "Stockholm, Sweden",
			"degree" : "BSc",
			"major" : "Business Administration",
			"gradYear" : 2009
		}
	],
	"display" : function(){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace(d, education.schools[school].name));
			$(".education-entry:last").append(HTMLschoolLocation.replace(d, education.schools[school].city));
				$(".education-entry:last").append(HTMLschoolDates.replace(d, education.schools[school].gradYear));
			$(".education-entry:last").append(HTMLschoolMajor.replace(d, education.schools[school].major));
			$(".education-entry:last").append(HTMLschoolDegree.replace(d, education.schools[school].degree));

		}
	}
};

var project = {
	"projects" : [
		{
			"title" :  "Project 1",
			"dates" : "2014",
			"description" : "Lorem ipsum bla bla bla lorem lorem ipsum lorem ipsum"
		},
		{
			"title" :  "Project 2",
			"dates" : "2012",
			"description" : "Lorem ipsum bla bla bla lorem lorem ipsum lorem ipsum"
		}
	],
	"display" : function() {
		$("#projects").append(HTMLprojectStart);
		for (id in project.projects){
			$(".project-entry").append(HTMLprojectTitle.replace(d, project.projects[id].title));
			$(".project-entry").append(HTMLprojectDates.replace(d, project.projects[id].dates));
			$(".project-entry").append(HTMLprojectDescription.replace(d, project.projects[id].description));
		};
	}
};

bio.display();
project.display();
work.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();


/*
Internationalization button stuff
*/
$("#letsConnect").append(internationalizeButton);

function inName(name){
	nameArray = name.split(" ");
	firstName = nameArray[0].toLowerCase();
	firstName = firstName.replace(firstName.charAt(0), firstName.charAt(0).toUpperCase());
	lastName = nameArray[1].toUpperCase();
	return firstName + " " + lastName;
};

/*
Call-to-action to encourage users to connect with me, by scrolling up to reveal contact details :)
*/
$(document).ready(function() {
  $('.connect-button').click(function() {
    $("html, body").animate({
      scrollTop: 0
  }, 1000);
  });
});
