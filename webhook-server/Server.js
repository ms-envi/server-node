var express = require('express');
var bp = require('body-parser');

var app = express();
var port = 3000;
var reqId;

app.use(bp.json());




app.post('/webhooks/analytics',function (req, res){
  console.log(JSON.stringify(req.headers));
  var reqId = req.headers['x-request-id'];
  console.log('x-request-id:'+ reqId);

  res.status(202).json({managerId:'b3634ec9-1f93-420a-b0f4-5f1be1c33c98',requestId: 'dsdsd'});
});


var server = app.listen(port, function (){
  var host = server.address().address;
  var port = server.address().port;

 console.log('App listening at http://%s:%s', host, port);

});
