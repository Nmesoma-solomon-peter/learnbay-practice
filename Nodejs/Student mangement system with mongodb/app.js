const myExpress = require("express");
const app = myExpress();
const myEjs = require("ejs");
const myMongodb = require("mongodb");
const Bcrypt = require("bcrypt");

app.use(myExpress.urlencoded({extended:true}));
app.set("view engine", "ejs");

const mongoConnection = async () => {
    const connection = await myMongodb.MongoClient.connect("mongodb://localhost:27017/");
    return connection.db("fooddatabase");
}



// add student route|
app.get("/", (req, res) => {
    res.render("addStudent.ejs");
});

app.post("/addstudent", async(req, res) => {
    const studentName = req.body.name;
    const studentAge = req.body.age;
    const studentLocation = req.body.location;
    const studentPassword = req.body.password;
    
    const db = await mongoConnection();
    db.collection("foods").insertOne({name:studentName, age: studentAge, location:studentLocation, password:await Bcrypt.hash(studentPassword,12)})
    res.send("Successfully added data");
}); 

app.get("/readall", async (req,res)=>{
    const db = await mongoConnection();
    const oneData = await db.collection("foods").findOne({name:"Nmesoma"});
    const allData = await db.collection("foods").find({}).toArray();
    console.log(oneData);
    console.log(allData);
});
app.get("/update",async (req,res)=>{
    const db = await mongoConnection();
    const updateOne = await db.collection("foods").updateOne({name:"Nmesoma"}, {$set:{name:"Meme"}});
    // const updateMany = await db.collection("foods").updateMany([{name:"Nmesoma"},])
    console.log(updateOne);  
})
app.get("/delete",async (req,res)=>{
    const db = await mongoConnection();
    const deleteOne =  await db.collection("foods").deleteOne({name:"Moses"});
    console.log(deleteOne);
    
})

app.listen(5000, () => {
    console.log("server running");
})