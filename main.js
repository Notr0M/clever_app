"use strict";

const http = require("http"),
	port = process.env.PORT || 3001;

http.createServer("/", (req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello Pooria");
}).listen(port, () => {
	console.log(`server is running on ${port}`);
});