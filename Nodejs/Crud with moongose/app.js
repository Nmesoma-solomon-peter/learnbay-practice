const Express = require("express");
const app = Express();
const Mongoose = require("mongoose");
const Ejs = require("ejs");
app.use(Express.urlencoded());
app.set("view engine", "ejs");

Mongoose.connect("mongodb://localhost:27017/mybooks",{
    useUnifiedTopology: true,
  });

const bookSchema = new Mongoose.Schema({
    bookName:String,
    bookAuthor:String,
});

const books = Mongoose.model("books", bookSchema);

app.get("/add",(req,res)=>{
    res.render("addbook.ejs");
})

app.post("/addone",async(req,res)=>{
    const {bookName , bookAuthor} = req.body;
    
    const createBook = new books({
        bookName,
        bookAuthor,
    })
    await createBook.save()

    await books.insertMany([
        {bookAuthor:"Lookman",
        bookName:"lele oo"
        },{
            bookAuthor:"lookakakakak",
            bookName:"see wahwh"
        },{
            bookAuthor:"ugorji",
            bookName:"see pepper"
        }
    ])
    .then(()=>{
        console.log("successfully added");
        res.redirect("/add")
    })
})


// reading the data
app.get("/", async(req,res)=>{
   const allBooks = await books.find({}).then((books)=>{
        res.render("readall.ejs", {books})
   });
   
})
// app.get("/readsome",async(req,res)=>{
//     const findsome = await books.find(})
// })

app.get("/deleteone",async(req,res)=>{
    await books.deleteOne({bookName:"See"});
    await books.deleteMany({bookName:"heheheheheh"})
    .then(()=>{
        console.log("successfully deleted");
        res.redirect("/");
    })
    
})

app.get("/update",async(req,res)=>{
 await books.updateOne({bookAuthor:"Sonia"},{$set:{bookAuthor:"Etuhoko",bookName:"Sonia copies"}})
})

app.listen(5000,()=>{
    console.log("Server is up and running");
})