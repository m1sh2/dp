var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		var query = url.parse(request.url).query;
		console.log("--------------------------------------pathname"+pathname);
		route(handle,pathname,response,query);
	}
	http.createServer(onRequest).listen(1111);
	console.log("Server has started.");
}

exports.start = start;