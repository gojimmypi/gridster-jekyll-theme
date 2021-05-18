$(document).ready(function () {
	$('.articles').jscroll({
		contentSelector: 'article, .pagination',
		nextSelector: '.next',
		padding: 10,
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
