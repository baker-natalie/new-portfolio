//the octopus
var HTMLnavListItem = '<li class="nav-list-item"><a href="#%link%">%title%</a></li>';
var HTMLpageView = '<div class="anchor-div" id="%title%"><a class="anchor" name="%anchor%"></a></div>';
var HTMLpageHeader = '<h1>%header%</h1>';
var HTMLdivText = '<p class="content" id="%id%">%content%</p>';
var HTMLbioImage = '<img src="%img%" alt="%alt%" />';
var HTMLshowcaseDiv = '<div class="showcase"><h3>%title%</h3></div>';
var HTMLimg = '<img src="%img%" alt="%alt%" />';
var HTMLshowcaseLinks = '<a href="%code%">code</a><a href="%demo%">demo</a>';
var HTMLprojects = '<div class="projects"><h3><a href="%link%">%title%</a></h3></div>';
var HTMLservices = '<div class="services"></div>';
var HTMLservice = '<div class="service"><h3>%title%</h3><p>%description%</p></div>';
var HTMLemailForm = '<div class="email-form"></div>';
var HTMLsocMed = '<ul id="soc-med-list"></ul>';
var HTMLsocMedList = '</li><a href="%link%" class="soc-med-icon"></a></li>';
var HTMLicon = '<img src="%img%" alt="%alt%"/>';

var hideLanding = function(id) {
	$(id).click(function() {
		$( ".landing" ).slideToggle( "slow", function() {
			$( ".landing" ).hide();
			$(".soc-med-landing").hide();
		});
	});
};
hideLanding(".a");
hideLanding(".b");
hideLanding(".landing");