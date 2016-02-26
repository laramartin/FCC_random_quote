$(document).ready(function() {
	var quoteJson = {};
	$.getJSON( "https://raw.githubusercontent.com/laramartin/FCC_random_quote/master/game_quotes.json", function( data ) {
		quoteJson = data;
	});
	$("#getQuote").on("click", function() {
		
		function randomNum(minNum, maxNum){
			return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
		}

		var myRandom = randomNum(0, quoteJson.quotes.length)
		var phrase = quoteJson.quotes[myRandom].phrase;
		var author = quoteJson.quotes[myRandom].author;

		$('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('http://goo.gl/5dJNIR "' + phrase + '" ' + author));
		var html = "<div class= 'randomQuote monofont'><em>\"" + phrase + "\"</em><br><b> -- " + author + "</b>" +  "<div class = 'randomGame monofont'><i class='fa fa-gamepad'></i>  " + quoteJson.quotes[myRandom].game + "</div></div>"; 
		$(".quotePhrase").html(html);
	});
});


window.twttr = (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
	t = window.twttr || {};
	if (d.getElementById(id)) return t;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js, fjs);
	
	t._e = [];
	t.ready = function(f) {
		t._e.push(f);
	};
	return t;
}
(document, "script", "twitter-wjs"));


