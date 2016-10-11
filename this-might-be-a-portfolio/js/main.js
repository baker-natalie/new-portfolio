//the data model

	var anchorLinks = {
		list: [
			{
				header: "About Me",
				title: "about"
			}, {
				header: "Recent Work",
				title: "portfolio"
			}, {
				header: "Let's Work Together",
				title: "services"
			}, {
				header: "Talk to Me",
				title: "contact"
			}
		]
	};
	anchorLinks.display = function() {
		for (var i = 0; i < anchorLinks.list.length; i++) {
			var formattedNavListItem = HTMLnavListItem.replace("%title%", anchorLinks.list[i].title);
			$(".nav-list:last").append(formattedNavListItem.replace("%link%", anchorLinks.list[i].title));
			var formattedPageView = HTMLpageView.replace("%anchor%", anchorLinks.list[i].title);
			$(".anchor-container").append(formattedPageView.replace("%title%", anchorLinks.list[i].title));
			$(".anchor-div:last").append(HTMLpageHeader.replace("%header%", anchorLinks.list[i].header));

		};
	};
	anchorLinks.display();

	var about = {
		id: "about-me",
		content: "My name is Natalie Baker, and I design, develop, and deploy beautiful, functional websites using HTML, CSS, and JavaScript. I have experience with HTML5 Canvas, Bootstrap, Knockout.js, APIs, Jasmine testing, and responsive design. I am dedicated to building optimized, accessible websites with strategically designed user interfaces.<br /><br />I am currently learning React.js and Sass to complete Free Code Camp's Data Visualization projects. I am also interested in learning more Javascript frameworks and back-end development. In addition to continuing my education, I am also working and gaining experience as a freelance developer. I am currently seeking new clients, as well as full-time opportunities."
	};
	about.display = function() {
		var formattedDivText = HTMLdivText.replace("%content%", about.content);
		$("#about").append(formattedDivText.replace("%id%", about.id));
		$("#about-me").addClass("col-md-8");
	};
	about.display();

	var recentWork = {
		intro: '<p class="project-p">See all my work at <a href="https://github.com/baker-natalie">github</a> and <a href="http://codepen.io/nataliebaker">codepen</a>.</p>',
		showcase: [
			{
				title: "Dillard Farms",
				img: "images/df-logo.png",
				alt: "dillard-farms logo",
				code: "http://github.com/baker-natalie/",
				demo: "http://dillard-farms.firebaseapp.com"
			}, {
				title: "HouMuse",
				img: "images/houmuse.jpg",
				alt: "houmuse image",
				code: "http://github.com/baker-natalie/houmuse",
				demo: "http://baker-natalie.github.io/houmuse"
			}
		],
		projects: [
			{
				title: "Hello Sweetie",
				url: "https://github.com/baker-natalie/optimization-project",
				img: "images/web-perf.jpg",
				alt: "hello sweetie thumbnail"
			}, {
				title: "Feed Reader Testing",
				url: "https://github.com/baker-natalie/feed-reader-testing",
				img: "images/jasmine-testing.jpg",
				alt: "feed reader testing thumbnail"
			}, {
				title: "Classic Arcade Clone",
				url: "https://github.com/baker-natalie/arcade-clone",
				img: "images/arcade-clone.jpg",
				alt: "arcade clone thumbnail"
			}, {
				title: "Original Online Resume",
				url: "https://github.com/baker-natalie/baker-natalie.github.io",
				img: "images/resume.jpg",
				alt: "resume thumbnail"
			}
		]
	};
	recentWork.display = function() {
		$("#portfolio").append(recentWork.intro);
		$("#portfolio").append(HTMLshowcase);
		$("#portfolio").append(HTMLprojectDiv);

		for (var i = 0; i < recentWork.showcase.length; i++) {
			$("#showcase").append(HTMLshowcaseDiv.replace("%title%", recentWork.showcase[i].title));
			var formattedShowcaseImg = HTMLimg.replace("%img%", recentWork.showcase[i].img);
			$(".showcase:last").append(formattedShowcaseImg.replace("%alt%", recentWork.showcase[i].alt));
			var formattedShowcaseLinks = HTMLshowcaseLinks.replace("%code%", recentWork.showcase[i].code);
			$(".showcase:last").append(formattedShowcaseLinks.replace("%demo%", recentWork.showcase[i].demo));
		};
		for (var j = 0; j < recentWork.projects.length; j++) {
			var formattedProjects = HTMLprojects.replace("%title%", recentWork.projects[j].title);
			$("#projects").append(formattedProjects.replace("%link%", recentWork.projects[j].url));
			var formattedProjectImg = HTMLimg.replace("%img%", recentWork.projects[j].img);
			$(".projects:last").append(formattedProjectImg.replace("%alt%", recentWork.projects[j].alt));
		};
	};
	recentWork.display();

	var services = {
		serviceItems: [
			{
				title: "Full Build",
				description: "Starting from scratch? We'll work together to build the website you need, and reach the audience you are trying to impact."
			}, {
				title: "Project Assistance",
				description: "Does your existing website need an update? I'll help you with everything from minor bug fixes to complete redesign. "
			}, {
				title: "Custom Project",
				description: "Got an idea for a web-based app? Let me help you bring it to life."
			}, {
				title: "Full Time",
				description: "Need a crackerjack junior developer to join your team? Let's talk!"
			}
		],
		contactLink: '<h2 class="col-xs-12"><a href="#contact">Get in Touch!</a></h2>'
	};
	services.display = function() {
		$("#services").append(HTMLservices);
		for (var i = 0; i < services.serviceItems.length; i++) {
			var formattedService = HTMLservice.replace("%title%", services.serviceItems[i].title);
			$(".services").append(formattedService.replace("%description%", services.serviceItems[i].description));
		};
		$("#services").append(services.contactLink);
	};
	services.display();

	var socialMedia = {
		socMedItems: [
			{
				img: "images/email.png",
				link: "mailto:bakernataliea@gmail.com",
				alt: "email"
			}, {
				img: "images/github.png",
				link: "https://github.com/baker-natalie",
				alt: "github"
			}, {
				img: "images/codepen.png",
				link: "http://codepen.io/nataliebaker/",
				alt: "codepen"
			}, {
				img: "images/linkedin.png",
				link: "https://linkedin.com/in/natalie-baker",
				alt: "linkedin"
			}
		]
	};
	socialMedia.display = function() {
		$("#contact").append(HTMLsocMed);
		for (var i = 0; i < socialMedia.socMedItems.length; i++) {
			$("#soc-med-list").append(HTMLsocMedList.replace('%link%', socialMedia.socMedItems[i].link));
			var formattedIcon = HTMLicon.replace('%img%', socialMedia.socMedItems[i].img);
			$(".soc-med-icon:last").append(formattedIcon.replace('%alt%', socialMedia.socMedItems[i].alt));
		}
	};
	socialMedia.display();