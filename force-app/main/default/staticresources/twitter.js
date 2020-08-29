(function(document){ 
	var script = 'script',
	    twitterWidgets = document.createElement(script),
	    lastScript = document.getElementsByTagName(script)[0];
	
	twitterWidgets.async = twitterWidgets.src = 'http://platform.twitter.com/widgets.js'; 
	lastScript.parentNode.insertBefore(twitterWidgets, lastScript); 
})(document);

// compressed 177 bytes
(function(a){var b="script",c=a.createElement(b),d=a.getElementsByTagName(b)[0];c.async=c.src="http://platform.twitter.com/widgets.js",d.parentNode.insertBefore(c,d)})(document)
