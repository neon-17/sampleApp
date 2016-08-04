var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

    console.log(params);

    var a = params.number1;
    var b = params.number2;

    var numA = new Number(a);
    var numB = new Number(b);

    var sum = new Number(numA + numB).toFixed(0);

    response.write(sum);
    response.end();
}).listen(3000);
