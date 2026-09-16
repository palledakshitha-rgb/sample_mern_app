let express = require('express');
let hrroutes=require('./routes/hr_routes');
let app = express();


app.use("/ap/hr",hrroutes);


app.listen(3000,()=>{
    console.log("Server running on port 3000")
})