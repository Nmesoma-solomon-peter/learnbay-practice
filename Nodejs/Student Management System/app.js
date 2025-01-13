const { error, log } = require("console");
const Express = require("express");
const app = Express();
const port = 5000;
const fs = require("fs");
const ejs = require("ejs");
const Multer = require("multer");

app.use(Express.urlencoded());
app.use("/images",Express.static("images"));
app.set("view engine",'ejs');


const uploadInfo = Multer.diskStorage({
    destination:(req,fileInfo,fileFunc)=>{
        fileFunc(null,"images/");
    },
    filename:(req,fileInfo,fileFunc)=>{
        fileFunc(null,fileInfo.originalname);
    }
})
const uploadLocation = Multer({storage:uploadInfo});


app.get("/", (req, res) => {
    res.render("home");
});
app.get("/add", (req, res) => {
    // res.sendFile(__dirname + '/add.html');
    res.render("add")
});
app.post("/addstudent",uploadLocation.single("profilePix"),(req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    
    
    // Reading the content of our studentDetail files and updating it.     
    fs.readFile("studentDetails.json", "utf-8", (error, result) => {
        if (!error) {
            const studentDetailsJS = JSON.parse(result);
            studentDetailsJS.push(req.body);
            // updating the studentDetails file.
            // fs.writeFile("studentDetails.json",JSON.stringify(studentDetailsJS),(error)=>{
            //     if(!error){
            //         console.log("successfully added student");
            //     }
            // })
            fs.writeFileSync("studentDetails.json",JSON.stringify(studentDetailsJS));
        }
    });

    // const studentDetail = fs.readFileSync("studentDetails.json","utf-8");
    // const studentDetailsJS = JSON.parse(studentDetail);
    // studentDetailsJS.push(req.body);
    // fs.writeFileSync("studentDetails.json",JSON.stringify(studentDetailsJS));

    res.redirect("/");
});

app.get("/view",(req,res)=>{
    const convertedJson = JSON.parse(fs.readFileSync("studentDetails.json","utf-8"))
    res.render('view',{students:convertedJson});
});

app.get("/view/:ID",(req,res)=>{
    //read the file
    const fileContentJSObject = JSON.parse(fs.readFileSync("studentDetails.json","utf-8"));
    fileContentJSObject.map((i)=>{
        if(req.params.ID == i.rollNumber){
            res.render("singleStudent",{studentDetails : i})
        }        
    })
});

// handle error page
app.get("*",(req,res)=>{
    res.render("404page");
});

app.listen(port, () => console.log(`server listening to port${port}`));