let http = require('http');

const PORT = 8000;

let server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("hello world");
  res.end();
});

server.listen(PORT);
console.log('listening on 8000');