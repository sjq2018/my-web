var http=require('http');
var bus =[
  {id:1,name:"奔驰1111",ctime:new Date()},
  {id:2,name:"宝马2222",ctime:new Date()},
  {id:3,name:"宾利3333",ctime:new Date()},
];
var code={"code":"0","message":"",success:true};
code.data=bus;
console.log(code);
http.createServer(function (req,res) {
  res.writeHead(200,{'Content-type':'application/json;charset=UTF-8',"Access-Control-Allow-Origin":"*"});
  res.write(JSON.stringify(code));
  res.end();

}).listen(1555,'127.0.0.1');
console.log("Server run at http://127.0.0.1:1555");
