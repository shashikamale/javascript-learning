var http = require('http');

let server = http.createServer((request, response) => {
    response.write('<h1>Node Http Servier</h1>');
    response.end('<h2>Created in Training Classroom</h2>');
});

server.listen(5000, () => {
    console.log('Server is running : use http://localhost:5000/');

});