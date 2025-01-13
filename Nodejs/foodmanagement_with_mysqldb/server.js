const Express = require("express");
const app = Express();
const ejs = require("ejs");
const connectionDetails = require("./connectToDb");

app.use(Express.urlencoded());


app.set("view engine", ejs);

app.get("/add", (req, res) => {
    res.render("add.ejs");
});
// create foodtable
app.get("/createtable", (req, res) => {
    const createTable = "create table foods(foodid int primary key, foodname varchar(20) , foodprice int)"
    connectionDetails.query(createTable, (error, result) => {
        if (!error) {
            res.render("create.ejs", { content: "Successfully created table" });
        } else {
            res.render("create.ejs", { content: `${error.message}` });
        }
    })
})

app.post("/add", (req, res) => {
    const addsinglerow= "insert into foods(foodid,foodname,foodprice) values(?)";
    connectionDetails.query(addsinglerow,[[req.body.id,req.body.foodName,req.body.foodPrice]],(error,result)=>{
        if(!error){
            console.log("successfully added singlerow");
        }else{
            console.log(error);   
        }
    })
});

app.get("/getall",(req,res)=>{
    const getAllfoods = "select * from fooddb.foods";
    connectionDetails.query(getAllfoods,(error,result)=>{
        if(!error){
            res.render("getall.ejs",{content:result})
        }else{
            res.render("getall.ejs",{content:error.message})
        }
    })
});

app.get("/get/:id",(req,res)=>{
    const getOne = `select * from fooddb.foods where foodid = ${req.params.id}`
    connectionDetails.query(getOne,(error,result)=>{
        if(!error){
            res.render("getone.ejs",{content:result})
        }else{
            res.render("getone.ejs",{content:error.message})
        }
    })
})

app.listen(5000, () => {
    console.log("server successfully connected");
})