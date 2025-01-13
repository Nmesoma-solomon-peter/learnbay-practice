const Express = require("express");
const app = Express();
const Mongoose = require("mongoose");

app.use(Express.json());

// Connect to MongoDB
Mongoose.connect("mongodb://localhost:27017/mybooks");

// Schema and Model
const mySchema = new Mongoose.Schema({
  bookname: String,
  bookauthor: String,
  issoftdeleted: {
    type: Boolean,
    default: false,
  },
});

const Book = Mongoose.model("book", mySchema);


// Create a new book
app.post("/mybooks/create", async (req, res) => {
  const { bookname, bookauthor } = req.body;
  try {
    const newBook = new Book({ bookname, bookauthor });
    await newBook.save();
    res.status(201).send("Successfully created book");
  } catch (error) {
    res.status(500).send("Error creating book");
  }
});

// Soft delete a book
app.delete("/mybooks/softdelete/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const bookDetails = await Book.findById(bookId);
    if (!bookDetails) {
      return res.status(404).send({ status: "Error", msg: "Book not found" });
    }

    // Update `issoftdeleted` to true
    bookDetails.issoftdeleted = true;
    await bookDetails.save();

    console.log("Book temporarily deleted");

    // Schedule hard delete after 1 month
    const oneMonthInMs = 30 * 24 * 60 * 60 * 1000; // 2,592,000,000 ms
    setTimeout(async () => {
      const bookToDelete = await Book.findById(bookId);
      if (bookToDelete && bookToDelete.issoftdeleted) {
        await Book.findByIdAndDelete(bookId);
        console.log(`Book with ID ${bookId} permanently deleted`);
      }
    }, oneMonthInMs);

    res.status(200).send({ status: "success", msg: "Book soft deleted" });
  } catch (error) {
    res.status(500).send("Error during soft delete");
  }
});



// Hard delete route
app.delete("/mybooks/hardelete/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const bookDetails = await Book.findById(bookId);
    if (!bookDetails) {
      return res.status(404).send({ status: "Error", msg: "Book not found" });
    }

    if (bookDetails.issoftdeleted) {
      await Book.findByIdAndDelete(bookId);
      return res.status(200).send({ status: "success", msg: "Book permanently deleted" });
    } else {
      return res.status(400).send({ status: "Error", msg: "Book is not marked for deletion" });
    }
  } catch (error) {
    res.status(500).send("Error during hard delete");
  }
});

//read undeleted books
app.get("/books/read",async(req,res)=>{
    try {
        const allBooks = await Book.find({issoftdeleted:false})
        res.status(200).send(allBooks)
    } catch (error) {
        res.status(500).send("books not found")
    }    
})
// awaiting deletion books
app.get("/books/readeleted",async(req,res)=>{
    try {
        const allAwaitDeletionBooks = await Book.find({issoftdeleted:true})
        res.status(200).send(allAwaitDeletionBooks)
    } catch (error) {
        res.status(500).send("books not found")
    }   
})
// recover deleted 
app.put("/books/recover/:id",async(req,res)=>{
    const bookId = req.params.id;
    try {
        const bookToRecover = await Book.findById(bookId)
        if(!bookToRecover){
            return res.status(404).send("book not found");
        }
        bookToRecover.issoftdeleted = false;
        await bookToRecover.save()
        res.status(201).send("Book successfully recovered");
    } catch (error) {
        res.status(501).send(error);
    }
})


// Start the server
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
