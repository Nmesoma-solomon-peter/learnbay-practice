const inputedText = document.querySelector("input")
const add = document.querySelector("button")
const myul = document.querySelector("ul")



add.addEventListener("click",()=>{
    const myli = document.createElement("li")
    myli.innerHTML = `${inputedText.value }  <button class="delete"> Delete </button> `
    myul.append(myli)

    let deletee = myli.querySelector('.delete')
    deletee.addEventListener("click",()=>{
        myli.remove()
    })
})
