var server = require("./server");
var router = require("./route");
var handler = require("./handler");

var handle = {}
handle["/"] = handler.page;
handle["/page"] = handler.page;
handle["/images/cross.png"] = handler.images;

server.start(router.route, handle);
