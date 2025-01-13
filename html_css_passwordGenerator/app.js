const passwordLengthInput = document.querySelector("input");
const generateBtn = document.querySelector("button");

let password = ""
const generatePassword = ()=>{
    password = ""
    let passwordLength = passwordLengthInput.value;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
    for(let i = 0 ; i < passwordLength;i++){
        let randomNumber = Math.floor(Math.random() * charset.length)
        password = `${password}` + charset[randomNumber]
    }
    // creating an h2 element
    const myH2 = document.createElement("h2");

    // clear previous content of the h2
    // myH2.textContent = " "

    myH2.innerHTML = `${password}      <i class="fa-regular fa-copy" id="copy"></i>   <i class="fa-solid fa-volume-high" id="volume"></i>`;

    const myPasswordCont = document.querySelector("#password-container");
    myPasswordCont.innerHTML = ""
    myPasswordCont.append(myH2);
    // document.querySelector('div').append(myH2)
    //storing my copy and volume icons to add event listener to them
    const copyIcon = myH2.querySelector("#copy");
    const volumeIcon = myH2.querySelector("#volume");
    // copy password action
    copyIcon.addEventListener("click",()=>{
        navigator.clipboard.writeText(password);
    })
    // read out password action
    volumeIcon.addEventListener("click",()=>{
        const readPassword = new SpeechSynthesisUtterance(password);
        speechSynthesis.speak(readPassword)
    })
}
// add event listener to generate a password when the submit button is clicked
generateBtn.addEventListener("click",()=>{
    generatePassword()
})

// dark and light mode toggle

const toggleIcon = document.querySelector("i");
const body = document.body;

let isToggle = false;
toggleIcon.addEventListener("click", ()=>{
    if (isToggle) {
        toggleIcon.classList.replace("fa-toggle-on", "fa-toggle-off");
        body.classList.remove("darkMode");
    } else {
        toggleIcon.classList.replace("fa-toggle-off", "fa-toggle-on");
        body.classList.add("darkMode");
    }
    isToggle = !isToggle;  // Toggle the value of isToggle
})