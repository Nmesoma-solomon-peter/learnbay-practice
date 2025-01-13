const quotecont = document.querySelector("quote");
const author = document.querySelector("i");

setInterval(()=>{
    fetch("https://api.quotable.io/random").then((output) => {
        return output.json();
    }).then((result) => {
        quotecont.innerHTML = `${result.content}`
        author.innerHTML = `${result.author}`
        console.log(result);

    }).catch((error) => {
        console.log(error);
    })
},5000);