const express=require("express");
const morgan=require("morgan");
const app=express();
const PORT=3000;

//using this single line to avoid writing 6-7 lines of code of logMiddlewareand app.use.
app.use(morgan())

// const logMiddleware=(req,res,next)=>{
//     res.data="this is data from Middleware."
//     console.log("Request url:",req.url,"Method",req.method,"Time:", new Data().toLocate)
//      res.send("Please give extended information.")
//     next()
 }

const apiMiddleware=(req,res,next)=>{
    const API_KEY=req.query.API_KEY;
    if(API_KEY!=="1234"){
        res.send("API KEY IS NOT VALID.")
    }

console.log("authenticated")
next();
}

// app.use(logMiddleware);
// app.use(apiMiddleware);


app.get("/",(req,res=>{
    console.log("Request data:" , req.data)
    console.log("Homepage")
    res.send("Hello from server")}
))

app.get("/weather-data",apiMiddleware,(req,res)=>{
    console.log("Weather Data")
    res.json({
        city:"Delhi",
        weather:"sunny",
        temp:32
    })
})

app.get
app.listen(PORT,()=>console.log("server is running on port 3000."))
