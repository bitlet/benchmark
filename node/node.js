const http = require("http");

http.Server((req, res) => {
    res.end("Hello, World!");
}).listen(8000);

console.log("Node server started");
