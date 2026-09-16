let express=require('express');
let route=express.Router();

route.get("/employees",(req,res)=>{
    res.send("Employees called");

});
Router.post("assign-task",(req,res)=>{
    res.send("assign task page is called");

})


