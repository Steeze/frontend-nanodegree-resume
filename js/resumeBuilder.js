

var bio = {
    "name" : "Erich Schutz",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile": "206-551-3646",
        "email": "erichschutz@gmail.com",
        "github": "https://github.com/Steeze",
        "twitter": "@ErichSchutz",
        "location": "Pittsburgh"
        },
        "welcomeMessage": "Do you see any Teletubbies in here?",
        "skills": ["C#", "Code Slinging", "Getting Rad", "Eating Pancakes"],
        "biopic": "images/fry.jpg",
        display : function(){
            var formattedName =  HTMLheaderName.replace('%data%', bio.name);
            var formattedRole =  HTMLheaderRole.replace('%data%', bio.role);
            $("#header").prepend(formattedRole).prepend(formattedName);
            var topContact = $("#topContacts");
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
            var skillsStart =  HTMLskillsStart;
            var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
            var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
            topContact.append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
            $(skillsStart).insertAfter(topContact);
            $(formattedPic).insertBefore($("#skillsH3"));
            $(formattedWelcomeMsg).insertBefore("#skillsH3");
            for(var skill in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkills);
            }
            $("#mapDiv").append(googleMap);
            $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
            $("#footerContacts").next().append(formattedPic).append(formattedWelcomeMsg);
        }
};

var education = {
    "schools": [{
        "name": "University Of Pittsburgh",
        "location": "Pittsburgh",
        "degree": "Bachelor of Science",
        "majors": ["Computer Science"],
        "dates": "1995 - 2001",
        "url": "http://www.pitt.edu/"
      }],
    "onlineCourses": [{
        "title": "Front End Nano-degree",
        "school": "Udacity",
        "date": "2015",
        "url": "www.udacity.com"
        }],
    display : function(){
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
        for(var onlineClass in education.onlineCourses) {

            $(HTMLonlineClasses).insertAfter($(".education-entry:last"));
            var formattedOnlineClassTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school);
            var formattedOnlineClass = formattedOnlineClassTitle + formattedOnlineSchool;
            var formattedOnlineData = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url);
            $(HTMLschoolStart).insertAfter($("h3"));

            $(".education-entry:last").append(formattedOnlineClass).append(formattedOnlineData).append(formattedOnlineUrl);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Aesynt, Inc",
            "title": "Software Engineer",
            "location": "Pittsburgh",
            "dates": "12/12/12 - Future",
            "description": "Small batch 8-bit wayfarers church-key Intelligentsia next level Wes Anderson. " +
            "American Apparel try-hard taxidermy quinoa direct trade, irony semiotics four loko. Tilde brunch " +
            "iPhone, slow-carb tote bag literally pickled mustache. Dreamcatcher cardigan meh, beard forage yr " +
            "McSweeney's squid. Banksy deep v church-key chia 90's slow-carb fixie Kickstarter YOLO keffiyeh pour-over, " +
            "crucifix chambray forage cardigan. Helvetica slow-carb bicycle rights, artisan cred scenester before they sold out " +
            "food truck Portland four loko banjo chambray. Plaid dreamcatcher  freegan flexitarian +1."
        },
        {
            "employer": "Concurrent Technology Corporation",
            "title": "Software Engineer",
            "location": "Seattle",
            "dates": "01/01/01 - 12/12/12",
            "description": "Helvetica squid semiotics salvia tilde brunch. " +
            "PBR&B whatever pour-over chia craft beer, small batch biodiesel Pitchfork Blue Bottle " +
            "Schlitz pug tilde mumblecore. Truffaut deep v crucifix 8-bit, Schlitz hella " +
            "American Apparel fanny pack forage ennui chillwave meh Wes Anderson plaid umami. " +
            "Mustache Banksy polaroid lomo. Vinyl disrupt sustainable food truck dreamcatcher " +
            "cornhole. Banksy Pitchfork vinyl farm-to-table pork belly. Actually cred kale chips " +
            "Portland viral pour-over."
        }

      ],
     display : function(){
         for(var job in work.jobs) {

             $("#workExperience").append(HTMLworkStart);
             var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
             var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
             var formattedEmployerTitle = formattedEmployer + formattedTitle;
             $(".work-entry:last").append(formattedEmployerTitle);

             var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
             $(".work-entry:last").append(formattedDates);

             var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
             $(".work-entry:last").append(formattedWorkLocation);

             var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
             $(".work-entry:last").append(formattedDescription);
         }
     }
};

var projects = {
    "projects": [{
        "title": "mploir",
        "dates": "02/01/2015 - Future",
        "description": "Trust fund chia Williamsburg beard, bespoke Bushwick twee chambray hoodie swag " +
        "tattooed aesthetic Marfa squid. Bespoke banjo skateboard, tilde keffiyeh bicycle rights Odd Future " +
        "gluten-free organic health goth mumblecore Neutra. Drinking vinegar locavore next level, distillery " +
        "PBR&B gentrify leggings banjo food truck. Lo-fi ugh chia, yr umami meggings iPhone semiotics pickled put " +
        "a bird on it. Pop-up Shoreditch four loko, biodiesel keffiyeh vinyl deep v wolf pork belly irony literally" +
        " hoodie Tumblr Etsy. Synth cardigan irony pour-over Shoreditch. Chia pop-up vegan before they sold out pour-over tattooed.",
        "images": ["http://lorempixel.com/g/200/200/", "http://lorempixel.com/200/200/sports/"]
        },{
        "title": "Small Business Enviromental Home Page",
        "dates": "08/01/2008 - 12/01/2013",
        "description": "Cliche hella hoodie artisan scenester photo booth, post-ironic bespoke chillwave " +
        "ennui whatever. Chambray actually flannel Thundercats Portland cronut trust fund paleo, messenger bag " +
        "Echo Park banjo vegan hashtag viral. Chia street art four dollar toast seitan, paleo Helvetica meditation DIY plaid." +
        " Pop-up hella squid VHS, distillery organic hashtag dreamcatcher iPhone blog kogi chambray. Listicle umami brunch," +
        " crucifix Echo Park lumbersexual farm-to-table sartorial Portland ugh. Direct trade next level aesthetic, Echo Park " +
        "Shoreditch ennui kitsch. Meggings Tumblr direct trade, Schlitz heirloom trust fund four dollar toast church-key synth " +
        "seitan selfies listicle.",
        "images": ["http://lorempixel.com/200/200/", "http://lorempixel.com/g/200/200/"]
        }],
    display : function () {
        for(var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
            $(".project-entry:last").append(formattedProjectImage);

            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

education.display();
bio.display();
projects.display();
work.display();





