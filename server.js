var express=require('express');
var app=express();
var PORT= process.env.PORT||3000;
var todos=[{
  id:1,
  description:'my work',
  status:false
}, {
  id:2,
  description:'kombu',
  status:true
},{
  id:3,
  description:'hatchiko-jabdi',
  status:false
}];
app.get("/",function (req,res) {
res.send('TODO API Root');
});
app.get("/todos",function (req,res) {
  res.json(todos);
});
app.get("/todos/:id",function (req,res) {
  var todoid=parseInt(req.params.id,10);
  var matchedtodo;
  todos.forEach(function (todos) {
    if (todoid===todos.id){
      matchedtodo=todos;
    }

  });
  if (matchedtodo) {
    res.json(matchedtodo);

  }
  else {
    res.status(404).send("no match found");
    res.send("check id");
  }
});

app.listen(PORT,function () {
  console.log("express listening on port: "+PORT);
});
