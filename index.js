const express =require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

  res.sendFile(__dirname+"/bmiCalculator.html");

});

app.post("/",function(req,res){

  var n1=Number(req.body.weight);
  var n2=Number(req.body.height);
  var bmi = (n1/(n2*n2))*703;

  res.send("Your BMI is :" + bmi);

});

app.listen(3000,function(){
  console.log("server started");
});
