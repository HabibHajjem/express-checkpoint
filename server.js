const express=require('express');
const app=express();
var date = new Date();

const middleware=(req,res,next)=>{
    if(date.getHours()>9 && date.getHours()<17 && date.getDay()>0 && date.getDay()<6){
        next();
    }else{
        res.send("<h1 style=text-align:center;color:red;margin-top:100px>The site is only available monday to friday, from 9 to 17 </h1>")
    }
    
    
}

app.use(middleware);

app.use(express.static("public"));


const port=5000;
app.listen(port, ()=>console.log(`server running on port ${port}`));