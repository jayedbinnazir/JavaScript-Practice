let http = require('http');

let server = http.createServer((req,res)=>{
    res.end("sdsd");
});

server.listen(5050);

console.log("Server Run SuccessFull");