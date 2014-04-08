function route(handle,pathname,response,query) {
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response,query);
	}
	else{
		console.log("404 "+pathname);
		response.writeHead(404,{"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;