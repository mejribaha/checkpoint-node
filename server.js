const http = require("http")

const server= http.createServer((req, res)=>{
    res.WriteHead(200,{'Content-type':'text/html'});
    res.Write('<h1>Hello Node!!!!</h1>\n');

    res.end();
}) ;
server.listen(3000);

