const Express = require("express");
const app = Express();
const EJS = require("ejs");
app.use(Express.urlencoded());
app.set("view engine", "ejs");
const Expression = require("express-session");
const CSURF = require("csurf");
const csrfProtection = CSURF();
app.use(Expression({
    secret:"javacript",
    cookie:{secure:false}
}));
app.use(csrfProtection);

app.get("/getform",(req,res)=>{
    res.render("form",{token:req.csrfToken()})
})
app.post("/recform",(req,res)=>{
    console.log(req.body);
})



app.listen(5000,()=>console.log("server is running on port 5000"));