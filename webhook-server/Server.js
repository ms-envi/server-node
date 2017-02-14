var express = require('express');
var bp = require('body-parser');

var app = express();
var port = 3000;
var cnt =0;

app.use(bp.json());


app.post('/webhooks/analytics',function (req, res){
  console.log(req.body);
  reqId= req.headers['x-request-id'];
  console.log(JSON.stringify(req.headers));
  console.log('x-request-id:'+ reqId);

  if (reqId != undefined){
  res.json({managerId:'b3634ec9-1f93-420a-b0f4-5f1be1c33c98',requestId: reqId});
  console.log('reqId is defined')
  console.log(cnt);
  cnt++;
}else {
    res.status(202);
    console.log('reqId is undefined');
    console.log(cnt);
    cnt++;
  }
});


var server = app.listen(port, function (){
  var host = server.address().address;
  var port = server.address().port;

 console.log('App listening at http://%s:%s', host, port);

});
