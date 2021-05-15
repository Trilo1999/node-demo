var express =require('express');
var app =express();
app.get("/users",function(req,res){
    res.send("hiii users");
})
 app.listen(3030,()=>{
     console.log("port started on 3030")
 })