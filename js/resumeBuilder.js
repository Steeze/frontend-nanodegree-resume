

var bio = {
    "name" : "Erich Schutz",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile": "206-551-3646",
        "email": "erichschutz@gmail.com",
        "github": "https://github.com/Steeze",
        "twitter": "@ErichSchutz",
        "location": "Pittsburgh, Pa"
        },
        "welcomeMessage": "Yo Yo Yo",
        "skills": ["JavaScript", "C#", "Codes"],
        "biopic": "images/fry.jpg",
        display: function(){}
};

var education = {
    "schools": [{
        "name": "University Of Pittsburgh",
        "location": "Pittsburgh, Pa",
        "degree": "Computer Science",
        "majors": ["Psychology", "Information Science"],
        "dates": "2001",
        "url": "http://www.pitt.edu/"
      }],
    "onlineCourses": [{
        "title": "Front End Nano-degree",
        "school": "Udacity",
        "date": "2015",
        "url": "www.udacity.com"
        }],
        display: function(){}
};

var work = {
    "jobs": [
        {
            "employer": "Concurrent Technology Corporation",
            "title": "Software Engineer",
            "location": "Seattle, Wa",
            "dates": "01/01/01,12/12/12",
            "description": "DOD contractor"
        },
        {
            "employer": "Aesynt, Inc",
            "title": "Software Engineer",
            "location": "Pittsburgh, Pa",
            "dates": "12/12/12,04/12/15",
            "description": "Code Slinger"
        }
      ],
    display: function(){}
};

var projects = {
    "projects": [{
        "title": "mploir",
        "dates": "02/01/2015,03/01/2015",
        "description": "building the future of unemployment",
        "images": "http://lorempixel.com/400/100/",
        },
        {
            "title": "Small Business Enviromental Home Page",
            "dates": "08/01/2008,12/01/2013",
            "description": "Enviromental information for small businesses ",
            "images": "http://lorempixel.com/400/100/"
        }],
    display: function(){}
};

var formattedName =  HTMLheaderName.replace('%data%', bio.name);
var formattedRole =  HTMLheaderRole.replace('%data%', bio.role);

$("#header").prepend(formattedRole).prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
$("#topContacts").next().append(formattedPic).append(formattedWelcomeMsg);


for(var job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
}

for(var project in projects.projects) {

    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedProjectImage);
}

for (var school in education.schools) {

    $("#education").append(HTMLschoolStart);

    var formattedEducation = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedEducation);

    var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedEducationDegree);

    var formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedEducationDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedSchoolMajor);

}



