


//Turns pages you've read, well, RED!
function bookMark() {
	if (document.cookie.indexOf("visited") >= 0) {
	//document.body.style.border = "5px solid red";

	var div = document.createElement("div");
	div.style.width = "100%";
	div.style.height = "100px";
	div.style.background = "red";
	document.body.appendChild(div);
	var body = document.body;
	body.insertBefore(div, body.firstChild);

	} else {
	        document.cookie = "visited";
	    }
}

bookMark();

