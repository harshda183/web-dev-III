const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Hello from http server");
    
// });
const users= [
    { id: 1, name: "John" , email:"john@example.com"},
    { id: 2, name: "Jane" , email:"jane@example.com"},
    { id: 3, name: "Bob" , email:"bob@example.com"}

];

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    if(req.url=="/" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Home Page</h1>");
        res.end();
    }else if(req.url=="/about" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to About Page</h1>");
        res.end();
    }else if(req.url=="/contact" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Welcome to Contact Page</h1>");
        res.end();
    }else if(req.url=="/users" && req.method=="GET"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(users));
        res.end();
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
    
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
