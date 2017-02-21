// server that returns 500 after subscription
/**
1. user sends post to webhook/subscibe to ovs
2. x-request-id is being sent in 1. response
there is also type sent
3. server response must contain managerId and x-request-id
4. during farther communication server respond with 502 or 502, webhook keeps subscription for 15 minutes, beacuse it indicates
mainteinance window

**/
var express = require('express');
var bp = require('body-parser');

var app = express();
var port = 3000;
var cnt = 0;
var typeH;
app.use(bp.json());


app.post('/webhooks/analytics',function (req, res){
  //console.log(req.body);
  console.log(req.header);
  reqId = req.headers['x-request-id'];
  typeH = req.headers['type'];
  console.log('type:' + typeH);
  console.log('x-request-id:'+ reqId);

    if (typeH=='SUBSCRIPTION_CONFIRMATION, DATA'){
    res.json({managerId:'b3634ec9-1f93-420a-b0f4-5f1be1c33c98',requestId: reqId});
    //f19d4084-ce3f-42b8-a7b5-92d38c2d17d1
    //mary+t - b3634ec9-1f93-420a-b0f4-5f1be1c33c98

    console.log(cnt);
    cnt++;}
    else {
      res.status(122).end();
      console.log(cnt);
      console.log('should send 122');
      cnt++;
    }

  });


var server = app.listen(port, function (){
  var host = server.address().address;
  var port = server.address().port;

 console.log('App listening at port :', host, port);

});
