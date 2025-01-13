const Express = require("express");
const { default: mongoose } = require("mongoose");
const app = Express();
const Mongoose = require("mongoose");

app.use(Express.json())

Mongoose.connect("mongodb://localhost:27017/motivationalbooksdb");

const bookSchema = new Mongoose.Schema({
    title:String,
    description:String,
    author:String,
    cost:Number
});

const books = Mongoose.model("books",bookSchema);

app.post("/books/create", async(req,res)=>{
    const createBook = await books(req.body);
    createBook.save()
    .then(()=>{
        res.json({"message": "Successfully inserted data"})
    })
});

app.get("/books/getall",async(req,res)=>{
    const allBooks = await books.find({})
    .then((output)=>{
        res.json({"output": output});
        console.log(output);
        
    })
    .catch((error)=>{
        res.json({"error":error})
    })
});

app.get("/books/getone/:id", async(req,res)=>{
    const bookId = req.params.id;
    const findOne = await books.findOne({_id:bookId})
    .then((output)=>{
        res.json({"output":output})
    })
    .catch((error)=>{
        res.json({"error":error})
    })
});

app.put("/books/updateone/:id",async(req,res)=>{
    const bookId = req.params.id;
    const updateone = await books.findByIdAndUpdate(bookId,req.body,{new:true})
    .then((output)=>{
        res.json({"status":"successfully updated",
            "newdata":output
        })
    })
    .catch((error)=>{
        res.json({"error":error})
    })

})


app.delete("/books/deleteone/:id", async(req,res)=>{
    const bookId = req.params.id;
    const deleteone = await books.findByIdAndDelete(bookId)
    .then((output)=>{
        res.json({"status": "successfully deleted","output": output})
    })
    .catch((error)=>{
        res.json({"error":error})
    })
})
app.listen(5000, ()=> console.log("App is running on port 5000"))