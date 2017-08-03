let http = require('http');

let server = http.createServer(function(req,res){
  res.write('test');
  res.end();
});

server.listen(8000);
console.log('listenting on 8000');
