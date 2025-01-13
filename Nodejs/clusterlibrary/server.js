const Express = require("express");
const app = Express();
// import the os and cluster library
const myOs = require("os");
const myCluster = require("cluster");

const noOfCores = myOs.cpus().length;// gets the number of cores the computer has


let count = 0;

if(myCluster.isMaster){ //delegate the duty of creating cores and task to the master process
    for(let i = 1; i<noOfCores;i++){
        myCluster.fork();
    }
}else{ // let the worker process run or handle the request
    app.get("/light",(req,res)=>{
        res.send(`this is the light route and the value of count is ${count}`)
    })
    
    app.get("/hard",(req,res)=>{
        for(let i = 0; i<5000000000000000000000000000000000; i++){
            count += i;
        }
        res.send(`this is the hard route and the value of count is ${count}`)
    })
    
    app.listen(5000,(req,res)=>console.log("server running on port 5000"));    
}

