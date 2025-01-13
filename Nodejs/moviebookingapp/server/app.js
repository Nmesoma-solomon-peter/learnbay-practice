const Express = require("express");
const app = Express();
const Bycrypt = require("bcrypt");
const cors = require("cors");
app.use(cors());
app.use(Express.json())
const Mongoose = require("mongoose");
Mongoose.connect("mongodb+srv://nmesoma:meme@cluster0.2w2bn.mongodb.net/moviebooking?retryWrites=true&w=majority&appName=Cluster0");

// userSchema 
const userSchema = new Mongoose.Schema({
    username: String,
    email: String,
    password: String,
})
// movie schema 
const mymovie = new Mongoose.Schema({
    id: Number,
    movie_name: String,
    image_url: String,
    description: String,
    genre: String,
    censor: String,
    director: String,
    cast: Array
})

// // theater schema
const theaterSchema = new Mongoose.Schema({
    theatreName: String,
    showTimes: [String], // An array of strings for showtimes
    theatreImage:String
});

// // location schema
const locationSchema = new Mongoose.Schema({
    location: "String",
    theatre: [theaterSchema]
})

// movie model
const movieModel = Mongoose.model("movies", mymovie);
//usermodel
const userModel = Mongoose.model('users', userSchema);
// locationModel 
const locationModel = Mongoose.model('theaterdetails', locationSchema);



// ------------------------------------------------ routes--------------------------------

// create user
app.post("/user/signup", async (req, res) => {
    const { username, email, password, cPassword } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
        res.json({ "message": "Email Exist" })
    } else {
        if (password == cPassword) {
            const enteredPassword = password
            const HashedPassword = await Bycrypt.hash(enteredPassword, 12)
            const newUser = new userModel({
                username: username,
                email: email,
                password: HashedPassword,
            })
            await newUser.save()
                .then(() => {
                    res.json({ "message": "successful" })
                })
        } else {
            res.json({ "message": "password don't match" })
        }
        // console.log("Password do not match");
    }
})
// Signin route
app.post("/user/signin", async (req, res) => {
    const { email, password } = req.body;
    const findOutput = await userModel.findOne({ email }); //find the user from the db 
    if (findOutput) {
        const validPassword = Bycrypt.compare(password, findOutput.password);
        if (validPassword) {
            res.json({ "message": "success" })
        } else {
            res.json({ "message": "unsuccessful" });
        }
    } else {
        res.json({ "message": "unsuccessful" });
    }

})

// get all movie route.
app.get("/getallmovie", async (req, res) => {
    try {
        const allMovie = await movieModel.find({})
        res.json({ data: allMovie });
    }
    catch (error) {
        console.log(error);
    }
})

// find specific genre
app.get("/getallmovie/:genre", async (req, res) => {
    try {
        const genre = req.params.genre;
        const resultMovies = await movieModel.find({ genre: { $regex: genre, $options: "i" } });
        res.json({ data: resultMovies });
    } catch (error) {
        console.log(error);
    }
});


//find theatredetials
app.get("/findtheatrelocation",async(req,res)=>{
    try {
        const location = await locationModel.find()
        res.json({details: location})
    } catch (error) {
        console.log(error);
    }
});

app.listen(5000, (req, res) => {
    console.log("server is running on port 5000");
})































// const mySchema = new Mongoose.Schema({
//     name: {
//         type: String
//     },
//     password: String
// })

// const myModel = Mongoose.model("user", mySchema);

// // const create = new myModel({
// //     name:"Moses",
// //     password:"taaa"
// // });
// // create.save()
// // .then((result)=>{
// //     console.log("successfully created");
// // })
// // .catch((error)=>{
// //     console.log(error);
// // })

// // ///////////////////
// const mymovie = new Mongoose.Schema({
//     id: Number,
//     movie_name: String,
//     image_url: String,
//     description: String,
//     genre: String,
//     censor: String,
//     director: String,
//     cast: Array
// })

// const movieModel = Mongoose.model("movies", mymovie);
// try {
//     movieModel.insertMany([
//         {
//             "id": 1,
//             "movie_name": "Dune2",
//             "image_url": "https://4kwallpapers.com/images/wallpapers/dune-2-movie-poster-2732x2732-14717.jpg",
//             "description": "In Dune, Paul Atreides joins forces with Chani and the Fremen to avenge his family's downfall. Faced with a pivotal decision, he balances love and duty to avert a catastrophic destiny.",
//             "genre": "Action/Fantasy/Sci-Fi",
//             "censor": "U/A",
//             "director": "Denis Villeneuve",
//             "cast": ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"]
//         },
//         {
//             "id": 2,
//             "movie_name": "Oppenheimer",
//             "image_url": "https://images4.alphacoders.com/132/1323605.jpeg",
//             "description": "Oppenheimer follows the life of J. Robert Oppenheimer, the physicist who led the Manhattan Project, as he grapples with the moral and ethical implications of creating the atomic bomb, ultimately shaping the course of modern history.",
//             "genre": "Biographical/Drama",
//             "censor": "U",
//             "director": "Christopher Nolan",
//             "cast": ["Cillian murphy , Robert Downey Jr. , Emily Blunt"]
//         },
//         {
//             "id": 3,
//             "movie_name": "OG",
//             "image_url": "https://moviegalleri.net/wp-content/uploads/2024/02/Pawan-Kalyan-OG-Movie-Release-Date-on-September-27th-Poster-HD.jpg",
//             "description": "Ojas Gambheera, a feared gangster, returns to Mumbai after a decade in exile, determined to reclaim his power and finish what he started.",
//             "genre": "Action/Drama",
//             "censor": "U/A",
//             "director": "Sujeeth",
//             "cast": ["Pawan Kalyan", "Emraan Hashmi , Priyanka Mohan"]
//         },
//         {
//             "id": 4,
//             "movie_name": "Baahubali: The Conclusion",
//             "image_url": "https://e1.pxfuel.com/desktop-wallpaper/875/703/desktop-wallpaper-prabhas-baahubali-the-conclusion-movie-ultra-posters-baahubali-the-beginning.jpg",
//             "description": "The second installment of the epic Baahubali saga.",
//             "genre": "Action/Drama",
//             "censor": "U/A",
//             "director": "S.S. Rajamouli",
//             "cast": ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
//         },
//         {
//             "id": 5,
//             "movie_name": "Interstellar",
//             "image_url": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
//             "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//             "genre": "Sci-Fi/Drama",
//             "censor": "PG-13",
//             "director": "Christopher Nolan",
//             "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
//         },
//         {
//             "id": 6,
//             "movie_name": "Arjun Reddy",
//             "image_url": "https://i.pinimg.com/originals/9d/84/5e/9d845e298cb90b177bf008f28abb1030.jpg",
//             "description": "A brilliant medical student spirals into self-destruction after an intense breakup.",
//             "genre": "Drama/Romance",
//             "censor": "A",
//             "director": "Sandeep Reddy Vanga",
//             "cast": ["Vijay Deverakonda", "Shalini Pandey"]
//         },
//         {
//             "__v": 0,
//             "id": 7,
//             "movie_name": "The Dark Knight",
//             "image_url": "https://i.pinimg.com/originals/41/83/28/41832844a09a83213c8a29fc577ca7c8.jpg",
//             "description": "Batman faces off against the Joker, a criminal mastermind set on wreaking havoc on Gotham City.",
//             "genre": "Action/Crime/Drama",
//             "censor": "PG-13",
//             "director": "Christopher Nolan",
//             "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
//         },
//         {
//             "__v": 0,
//             "id": 8,
//             "movie_name": "Rangasthalam",
//             "image_url": "https://e0.pxfuel.com/wallpapers/814/824/desktop-wallpaper-ram-charan-s-rangasthalam-is-first-non-baahubali-telugu-film-to-achieve-it-tollywood-thumbnail.jpg",
//             "description": "A man born with dwarfism sets out to prove himself in a small village ruled by a tyrannical president.",
//             "genre": "Drama/Action",
//             "censor": "U/A",
//             "director": "Sukumar",
//             "cast": ["Ram Charan", "Samantha Akkineni"]
//         },
//         {
//             "__v": 0,
//             "id": 9,
//             "movie_name": "Inception",
//             "image_url": "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
//             "description": "A thief who enters the dreams of others to steal their secrets must plant an idea in someone's mind.",
//             "genre": "Action/Sci-Fi/Thriller",
//             "censor": "PG-13",
//             "director": "Christopher Nolan",
//             "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
//         },
//         {
//             "__v": 0,
//             "id": 10,
//             "movie_name": "Avatar",
//             "image_url": "https://i.pinimg.com/736x/8b/2f/a6/8b2fa6fb94810cd0d335b479896f7fc8.jpg",
//             "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//             "genre": "Action/Adventure/Fantasy",
//             "censor": "PG-13",
//             "director": "James Cameron",
//             "cast": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
//         }
//     ]
//     ).then((result) => {
//         console.log("successfully added data");
//     })

// } catch (error) {
//     console.log(error);

// }



// locationModel.insertMany([
//     {
//         "location": "Kigali",
//         "theatre": [
//             { "theatreName": "Century Cinema Kigali", "showTimes": ["9:30PM", "12:00AM", "10:45AM"], "theatreImage": "https://igihe.com/IMG/logo/kigali_century_cinema-2.jpg?1663779723" },
//             { "theatreName": "Kigali Heights Cinema", "showTimes": ["11:45PM", "9:00AM"], "theatreImage": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/1d/16/4f/century-cinemas-kigali.jpg?w=900&h=500&s=1" },
//             { "theatreName": "Makuza Peace Plaza Cinema", "showTimes": ["10:00AM", "1:30PM", "7:00PM"], "theatreImage": "https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2022/06/01/a-view-of-m-peace-plaza-popularly-known-as-kwa-makuza-was-established-in-2015.since-then-the-leading-commercial-building-has-been-the-one-stop-shop-destination.-courtesy.jpg" }
//         ]
//     },
//     {
//         "location": "Nairobi",
//         "theatre": [
//             { "theatreName": "Anga Diamond Plaza", "showTimes": ["1:00PM", "3:30PM", "7:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uBbIVe011wBY003ViPrRHO5kGVkadFAeTw&s" },
//             { "theatreName": "Westgate Cinema", "showTimes": ["2:15PM", "6:30PM", "9:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7serT6i80SyiR79fmd9LXx2NvS2j1cq_b5O_uAUhjiIMGOtaM-YQNODq4KiS9vfKi86M&usqp=CAU" },
//             { "theatreName": "IMAX Garden City", "showTimes": ["10:00AM", "2:00PM", "8:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgN36TxJFW7EbWaHe5hmZx8f-35Q74TwkxnTR_Xxl9GQoOwHnE9bAwol0-DDXKCXagDA&usqp=CAU" },
//             { "theatreName": "Prestige Cinema", "showTimes": ["12:30PM", "5:00PM", "9:30PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsshiq_mSXx8HfANqRCkrKSyaNzCt5daOddbJjbX2JeBfO1sc287IRmFmV94eGXQAKFHY&usqp=CAU" }
//         ]
//     },
//     {
//         "location": "Lagos",
//         "theatre": [
//             { "theatreName": "Filmhouse IMAX Lekki", "showTimes": ["12:00PM", "4:00PM", "8:30PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbkD08mLbCtGZVUgGSSUWUyniLrtxqCYPRJZVKlS7u5EAZEbBYj7J9vDiRWvExlfsNYw&usqp=CAU" },
//             { "theatreName": "Genesis Deluxe Cinema Victoria Island", "showTimes": ["10:30AM", "1:15PM", "5:45PM"], "theatreImage": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/45/08/14/genesis-cinema.jpg?w=900&h=500&s=1" },
//             { "theatreName": "Ozone Cinema Yaba", "showTimes": ["11:00AM", "3:00PM", "7:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwCDhq-uAHKE8573BRaLwtphmg7ZFAytKCIDICXI9mGqyQcA28PiV35k-MdC7BtJQt9I&usqp=CAU" },
//             { "theatreName": "Silverbird Galleria", "showTimes": ["10:00AM", "2:30PM", "6:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cQZY1ytlAe4TyTJ2EEaUpkSvUnwZmbixTw&s" },
//             { "theatreName": "Magrellos Cinemas", "showTimes": ["12:15PM", "3:45PM", "9:00PM"], "theatreImage": "https://igihe.com/IMG/logo/kigali_century_cinema-2.jpg?1663779723" }
//         ]
//     },
//     {
//         "location": "Johannesburg",
//         "theatre": [
//             { "theatreName": "Ster-Kinekor Sandton", "showTimes": ["11:00AM", "2:30PM", "6:45PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBL-_YgNs0Q-WHhloGB4cJVMgsaDof_rD57qtlGHUUHMbLj7xfjQMTxQSXRCKnjv2k7p4&usqp=CAU" },
//             { "theatreName": "Nu Metro Hyde Park", "showTimes": ["1:00PM", "4:00PM", "7:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWOUD7VZrMg0GAQcju1aCpTygL7pl6Fqeb1gdoxe5h6RSo3QPfFk027qtr_J0b3lh6C4&usqp=CAU" }
//         ]
//     },
//     {
//         "location": "Cape Town",
//         "theatre": [
//             { "theatreName": "Labia Theatre", "showTimes": ["9:30AM", "12:45PM", "6:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmGd2koSxEM5EEEh0c6B1GM5IliIcfMnYNSkZlK9uGvpR-GB5wZ4b9AX6ciEIzAmf1iU&usqp=CAU" },
//             { "theatreName": "V&A Waterfront Cinema", "showTimes": ["10:15AM", "2:45PM", "8:00PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a2EFLJXiu4QJjp6OkbphagItzFtTr5XzRYFYTzBGPOlh8MSkRWwCzQCctOmQ_0ZVVUA&usqp=CAU" },
//             { "theatreName": "Ster-Kinekor Cavendish", "showTimes": ["11:30AM", "4:00PM", "9:30PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ242PWPHddoWLBP7n3ZsrghzHPgR1Z2D06plH3-vd3GILr5mlmSx6HBUSlzSu3aIUg54A&usqp=CAU" },
//             { "theatreName": "Nu Metro Canal Walk", "showTimes": ["10:45AM", "3:15PM", "8:15PM"], "theatreImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ma6w3d0Oiu_DAT2DrjwHTTQpoDGOMy1pNbBAmWb1qEnQp-jQYh_0DuLB6RR_ZIhgIO8&usqp=CAU" }
//         ]
//     }
// ]
// ).then(() => console.log("successfully added")
// )