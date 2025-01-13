const Express = require("express");
const app = Express();
const myWorkerThread = require("worker_threads"); //import the worker_threads library

let count = 0; 

    app.get("/light",(req,res)=>{
        res.send(`this is the light route and the value of count is ${count}`)
    })
    
    app.get("/hard",(req,res)=>{
        heavyWorker = new myWorkerThread.Worker("./heavylogic.js");//creat an instance of workerthread to handle heavy logic stored in the heavylogic.js file
        heavyWorker.on("message",(countValue)=>{//gets the output of the heavylogic an stores in the countValue variable
            res.send(`this is the hard route and the value of count is ${countValue}`);//prints the value
        })
    })
    
    app.listen(5000,(req,res)=>console.log("server running on port 5000"));    


