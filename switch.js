function day() {
    body.className = "bodyLight";
	about.className = "aboutLight"
	content1.className = "bodyLight";
	githubAb.className = "github";
	document.cookie = "bodyLight";
};

function night() {
    body.className = "bodyDark";
	about.className = "aboutDark";
	content1.className = "bodyDark";
	githubAb.className = "githubDark";
	document.cookie = "bodyDark";
};

function init(){
	var bg = "bodyLight"
	if (document.cookie){
		bg = document.cookie;
	}
	body.className = bg;
	content1.className = bg;
	about.className = bg;
	
	if (bg == "bodyLight"){
		about.className = "aboutLight";
		githubAb.className = "github";
		content1.className = "bodyLight";
	}else
	{
		about.className = "aboutDark";
		githubAb.className = "githubDark";
		content1.className = "bodyDark";
	}
}

