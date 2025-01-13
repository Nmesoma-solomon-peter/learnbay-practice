const myContainer = document.querySelector(".container");
const mySearchBtn = document.querySelector("#searchBtn");
  


const getpoduct = async () => {
    try {
        // fetching data from fakestoreapi
        const fetchData = await fetch("https://fakestoreapi.com/products");
        const result = await fetchData.json()


        // loop through the data to display every individual product.
        let localStorageArr = [];
        // variable to hold the search input 
        // let mySearchInput = document.querySelector("#searchInput");
        
        // let searchInputContent = ''
        // mySearchBtn.addEventListener("click",()=>{
        //     searchInputContent = mySearchInput.value;
        // })

        // if(!searchInputContent){
           
        // }
        // else{
            result.map((item) => {
                // create elements to hold the data from the fakestoreapi to the frontend
                const mydiv = document.createElement('div')
                let myImg = document.createElement('img')
                let myTitle = document.createElement('h2')
                let mydisc = document.createElement('p')
                let myprice = document.createElement('h4')
                let mybtn = document.createElement('button');
    
                myImg.setAttribute("src", item.image);
                myTitle.textContent = item.title;
                mydisc.textContent = item.description;
                myprice.textContent = item.price;
                mybtn.textContent = "Add to cart";
    
                mydiv.setAttribute("class", "inner_cont");
    
                mydiv.append(myImg);
                mydiv.append(myTitle);
                mydiv.append(mydisc);
                mydiv.append(myprice);
                mydiv.append(mybtn);
    
                myContainer.append(mydiv)
                let qunt = 1;
    
                mybtn.addEventListener("click", () => {
                    const localStorageData = {
                        title:myTitle.textContent,
                        price: myprice,
                        quantity: qunt,
                    };
                    let localD = localStorageData.title;
                    // let mylocalStorageString = JSON.stringify(localStorageData)
                    if(localStorage.getItem(localD)){
                        ++qunt;
                    }
                    console.log( localStorageData.quantity);
    
    
                    localStorageArr.push(localStorageData)
                    localStorage.setItem(myTitle.textContent,JSON.stringify(localStorageArr));
                    // localStorage.clear();
                    console.log(localStorage);
                })
            })
        // }
       

        // myContainer.append(myImg);
        // myContainer.append(myTitle);
        // myContainer.append(p)
        // myContainer.append(h4)
    } catch (error) {
        console.log(error)
    }
}

getpoduct();
