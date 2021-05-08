//const savedTheme = localStorage.getItem('theme');
//// alert(savedTheme);
//if (savedTheme) {
//	document.documentElement.className = savedTheme;
//} else {
//	localStorage.setItem('theme', 'light');
//}
(function () {
	const savedTheme = localStorage.getItem('theme');
	// alert(savedTheme);
	if (savedTheme) {
		document.documentElement.className = savedTheme;
	} else {
		const userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const preferredTheme = userPrefersDarkMode ? 'dark' : 'light';
		document.documentElement.className = preferredTheme;
		localStorage.setItem('theme', preferredTheme);
	}
	// alert('Saved theme = ' + savedTheme);
})();

//
// ToggleDarkMode; forceDarkMode=true to froce into dark mode
// 
function ToggleDarkMode(forceDarkMode) {
	//     if (forceDarkMode === null || forceDarkMode === undefined) {
	//forceDarkMode = false;
	//     }

	document.body.classList.toggle("dark-theme", forceDarkMode);

	const divClasses = document.querySelectorAll('logo-container');
	if (!divClasses || divClasses === null || divClasses === undefined) {
		// alert("No divClasses found! ");
	}
	else {
		divClasses.forEach(element => {
			divClasses.classList.toggle("dark-theme", forceDarkMode);
		});
	}
	// set all custom <element> tages to dark mode
	// since the article element is customer (but does not have a dash in the name), we iterate all <element> tags:
	// see https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define (not used)
	const articleClasses = document.querySelectorAll('article');

	if (!articleClasses || articleClasses === null || articleClasses === undefined) {

	}
	else {
		articleClasses.forEach(element => {
			element.classList.toggle("dark-theme", forceDarkMode);
		});
	}

	// page should be in dark mode now		
}