		//tabbed panels
		//declare globals to hold all the links and all the panel elements
		var tabLinks;
		var tabPanels;

		window.onload = function() {
			//set initial panel state
			//listen for clicks on tabs
			tabLinks = document.getElementById("tabs").getElementsByTagName("li");
			tabPanels = document.getElementById("containers").getElementsByTagName("div");
			displayPanel(tabLinks[0]);
			//attach event listener to links using onclick and onfocus, fire the displayPanel function, return false to disable the link
			for (var i = 0; i < tabLinks.length; i++) {
				tabLinks[i].onclick = function() {
					displayPanel(this);
					return false;
				}
				tabLinks[i].onfocus = function() {
					displayPanel(this);
					return false;
				}
			}
		}
		function displayPanel(tabToActivate) {
			//respond to tab clicks
			//change panel display and activate tabs
			for (var i = 0; i < tabLinks.length; i++) {
				if (tabLinks[i] == tabToActivate) {
					tabLinks[i].classList.add("active");
					tabPanels[i].style.display = "block";
				} else{
					tabLinks[i].classList.remove("active");
					tabPanels[i].style.display = "none";
				}
			}

		}