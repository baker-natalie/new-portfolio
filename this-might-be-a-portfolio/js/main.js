//the data model

	var anchorLinks = {
		list: [
			{
				header: "",
				title: "home",
				anchor: "home"
			}, {
				header: "About Me",
				title: "about",
				anchor: "about"
			}, {
				header: "Recent Work",
				title: "portfolio",
				anchor: "portfolio"
			}, {
				header: "Let's Work Together",
				title: "services",
				anchor: "services"
			}, {
				header: "Talk to Me",
				title: "contact",
				anchor: "contact"
			}
		]
	};
	anchorLinks.display = function() {
		for (var i = 0; i < anchorLinks.list.length; i++) {
			var formattedNavListItem = HTMLnavListItem.replace("%title%", anchorLinks.list[i].title);
			$(".nav-list:last").append(formattedNavListItem.replace("%link%", anchorLinks.list[i].anchor));
			var formattedPageView = HTMLpageView.replace("%title%", anchorLinks.list[i].title);
			$(".anchor-container").append(formattedPageView.replace("%anchor%", anchorLinks.list[i].title));
			$(".anchor-div:last").append(HTMLpageHeader.replace("%header%", anchorLinks.list[i].header));

		};
	};
	anchorLinks.display();

	var home = {
		content: "design.<br />develop.<br />deploy.",
		id: "home-text"
	};
	home.display = function() {
		var formattedDivText = HTMLdivText.replace("%content%", home.content);
		$("#home").append(formattedDivText.replace("%id%", home.id));
	};
	home.display();

	var about = {
		id: "about-me",
		content: "My name is Natalie Baker, and I design, develop, and deploy beautiful, functional websites using HTML, CSS, and JavaScript. I have experience with HTML5 Canvas, Bootstrap, Knockout.js, APIs, Jasmine testing, and responsive design. I am dedicated to building optimized, accessible websites with strategically designed user interfaces.<br /><br />I am currently learning React.js and Sass to complete Free Code Camp's Data Visualization projects. I am also interested in learning more Javascript frameworks and back-end development. In addition to continuing my education, I am also working and gaining experience as a freelance developer. I am currently seeking new clients, as well as full-time opportunities.",
		img: "",
		alt: ""
	};
	about.display = function() {
		var formattedDivText = HTMLdivText.replace("%content%", about.content);
		$("#about").append(formattedDivText.replace("%id%", about.id));
		var formattedBioImage = HTMLbioImage.replace("%img%", about.img);
		$("#about").append(formattedBioImage.replace("%alt%", about.alt));
	};
	about.display();

	var recentWork = {
		intro: 'See all my work at <a href="https://github.com/baker-natalie">github</a> and <a href="http://codepen.io/nataliebaker">codepen</a>.',
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
				title: "Jasmine Feed Reader Testing",
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
		for (var i = 0; i < recentWork.showcase.length; i++) {
			$("#portfolio").append(HTMLshowcaseDiv.replace("%title%", recentWork.showcase[i].title));
			var formattedShowcaseImg = HTMLimg.replace("%img%", recentWork.showcase[i].img);
			$(".showcase:last").append(formattedShowcaseImg.replace("%alt%", recentWork.showcase[i].alt));
			var formattedShowcaseLinks = HTMLshowcaseLinks.replace("%code%", recentWork.showcase[i].code);
			$(".showcase:last").append(formattedShowcaseLinks.replace("%demo%", recentWork.showcase[i].demo));
		};
		for (var j = 0; j < recentWork.projects.length; j++) {
			var formattedProjects = HTMLprojects.replace("%title%", recentWork.projects[j].title);
			$("#portfolio").append(formattedProjects.replace("%link%", recentWork.projects[j].url));
			var formattedProjectImg = HTMLimg.replace("%img%", recentWork.projects[j].img);
			$(".projects:last").append(formattedProjectImg.replace("%alt%", recentWork.projects[j].alt));
		};
	};
	recentWork.display();

	var services = {
		serviceItems: [
			{
				title: "Full Build",
				description: "Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. Escape is not his plan. I must face him, alone. What?! I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me."
			}, {
				title: "Project Assistance",
				description: "I'm trying not to, kid. I suggest you try it again, Luke. This time, let go your conscious self and act on instinct. Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you."
			}, {
				title: "Custom Project",
				description: "What?! You don't believe in the Force, do you? Remember, a Jedi can feel the Force flowing through him. What good is a reward if you ain\'t around to use it? Besides, attacking that battle station ain\'t my idea of courage. It\'s more like…suicide."
			}, {
				title: "Full Time",
				description: "I care. So, what do you think of her, Han? Red Five standing by. You mean it controls your actions?"
			}
		]
	};
	services.display = function() {
		for (var i = 0; i < services.serviceItems.length; i++) {
			var formattedService = HTMLservice.replace("%title%", services.serviceItems[i].title);
			$("#services").append(formattedService.replace("%description%", services.serviceItems[i].description));
		};
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
		for (var j = 0; j < socialMedia.socMedItems.length; j++) {
			$(".soc-med-landing").append(HTMLsocMedList.replace('%link%', socialMedia.socMedItems[j].link));
			var formattedIcon = HTMLicon.replace('%img%', socialMedia.socMedItems[j].img);
			$(".soc-med-icon:last").append(formattedIcon.replace('%alt%', socialMedia.socMedItems[j].alt));
		}
	};
	socialMedia.display();