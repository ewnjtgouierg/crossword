var loadS = function(name, attrs, innerText)
   {
		var el = document.createElement(name);
		for (var i in attrs) el.setAttribute(i, attrs[i]);
		if (innerText) el.innerText = innerText;
		document.querySelector('HEAD').appendChild(el);
   };
var loadScript = function(url)
	{
		loadS('SCRIPT', {
			type: 'text/javascript',
			src: url
				});
	};
var loadStyle = function(url)
	{
		loadS('LINK', {
			rel: 'stylesheet',
			href: url
				});
	};
loadScript(chrome.runtime.getURL('print.js'));
document.addEventListener('keyup', function(e) {
	if (e.key == 'Enter' && e.ctrlKey) {} else return;
	loadStyle(chrome.runtime.getURL('print.css'));
		});
