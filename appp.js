var express=require('express')
var app=express()
app.get('/home',(req,res)=>{
   res.send("welcome to my home page")
})
app.get('/about',(req,res)=>{
    res.send("good mrng")
})
app.listen(3000,()=>{
    console.log("server started at http://localhost:3000/about")
})