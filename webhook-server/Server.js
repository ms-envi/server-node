/**
1. user sends post to webhook/subscribe to ovs
2. x-request-id is being sent in 1. response there is also type sent
3. server response must contain managerId and x-request-id
4. during further communication server must respond with 202, otherwise webhook is unsubscribe

**/
var express = require('express');
var bp = require('body-parser');

var app = express();
var port = 3000;
var cnt = 0;
var typeH;
app.use(bp.json());


app.post('/webhooks/analytics',function (req, res){
  console.log(req.body);
  console.log(req.header);
  reqId = req.headers['x-request-id'];
  typeH = req.headers['type'];
  console.log('type:' + typeH);
  console.log('x-request-id:'+ reqId);

    if (typeH=='SUBSCRIPTION_CONFIRMATION, DATA'){
    res.json({managerId:'83d15853-907c-4ed1-a2e4-34f820420ba4',requestId: reqId});
    //f19d4084-ce3f-42b8-a7b5-92d38c2d17d1
    //c1 - 3c21b16a-4d1f-4183-99cb-82ed95e853b9
    //mary+gtw accept: 2877b8bf-63b0-4a5a-ba6b-06fe58034223
    //mary+ bulk 204ff2b0-e458-4f1c-8e0e-85103613a73c
    //mary+t b3634ec9-1f93-420a-b0f4-5f1be1c33c98
    //admin1 1ac60147-fefd-4b2a-8537-728b1b9236ec
    //operator +o1 a9371a05-753e-4ecb-bf14-84dd3ed43c73
    //operator o15 83d15853-907c-4ed1-a2e4-34f820420ba4

    console.log(cnt);
    cnt++;}
    else {
      res.status(202).end();
      console.log(cnt);
      console.log('should send 202');
      cnt++;
    }

  });


var server = app.listen(port, function (){
  var host = server.address().address;
  var port = server.address().port;

 console.log('App listening at port :', host, port);

});
