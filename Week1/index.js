const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Contant-Type": "application /json"});
    res.end(
        JSON.stringify({
            data: "Hello World",
        })
    )
});
server.listen(3000);