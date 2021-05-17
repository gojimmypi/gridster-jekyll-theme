$(document).ready(function () {
	$('.articles').jscroll({
		contentSelector: 'article, .pagination',
		padding: 20,
		nextSelector: '.next',
		callback: removeWrap,
	});
});

function removeWrap() {
	var thisTheme = document.documentElement.style.getPropertyValue("color-scheme");
	const thisElements = $('.jscroll-added article');
	var forceDarkMode = (thisTheme == 'dark');
	for (i = 0; i < thisElements.length; i++) {
		thisElements[i].classList.toggle("dark-theme", forceDarkMode);
	}

	$('.jscroll-added article').unwrap();
}
