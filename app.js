var http = require('http');
var os 	= require('os-utils');

http.createServer(function (req, res) {
  os.cpuUsage(function(v){
    // v sample
    // CPU Usage (%): 0.09816971713810319
    res.write(JSON.stringify({
      cpu_using: v,
      message: 'cpu using x 100'
    }));
    res.end(); 
  });
}).listen(80); 
