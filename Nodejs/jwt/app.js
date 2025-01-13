const Express = require("express");
const app = Express();
const ejs = require("ejs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
app.set("view engine","ejs");
app.use(Express.urlencoded());
app.use(cookieParser())


const sendAndGetToken = (req,res,next)=>{
    const recievedToken = req.cookies.token;
    if(!recievedToken){
        res.redirect("/user/login");
    }else{
    jwt.verify(recievedToken,"Lookman",(error)=>{
        if(error){
            res.redirect("/login")
        }else{
            next()
        }
    });
}
}

app.get("/user/login",(req,res)=>{
    res.render("login");
});

app.post("/user/login",(req,res)=>{
   const generatedtoken = jwt.sign(req.body,"Lookman");
   res.cookie("token", generatedtoken);
   res.redirect("/mobiles")
});

app.get("/mobiles",sendAndGetToken,(req,res)=>{
    res.render("mobiles")
}
)
app.get("/books",sendAndGetToken,(req,res)=>{
    res.render("books")
}
)

app.listen(5000, ()=> console.log("server is up and running"));