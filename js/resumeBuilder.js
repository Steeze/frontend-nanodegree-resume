

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
        "images": "array with string urls"
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
$(".clear").append(formattedPic).append(formattedWelcomeMsg);


for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}

