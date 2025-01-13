const Express = require("express");
const app = Express();
const Axios = require("axios");
const Redis = require("redis")

const redisDatabase = Redis.createClient({socket:{port:6379}});
redisDatabase.connect();

const redisContanier = async(req,res,next)=>{
    const inredis = await redisDatabase.get("products")
    if(inredis == null){
        next();
    }else{
        console.log("coming from redisdb",inredis);
    }
    
}

app.get("/getProduct",redisContanier,(req,res)=>{
    Axios.get('https://fakestoreapi.com/products')
    .then(output =>{
        redisDatabase.setEx("products",3000,JSON.stringify(output.data));
        console.log("coming from getmain",output.data);
        
    })
})


app.listen(5000,(req,res)=>{
    console.log("server running on port 5000"); 
})