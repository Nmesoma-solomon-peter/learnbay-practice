const myRedux = require("redux");

const myState = {
    noOfPhones: 6
}

function buyMobile(){
    return{
    type: "BUY_MOBILE"
}}

function myReducer(state = myState,action) {
    if(action.type == "BUY_MOBILE"){
        return{
            noOfPhones:5
        }
    }
    return state
}

const myStore = myRedux.createStore(myReducer);
console.log(myStore.getState());

myStore.dispatch(buyMobile())

console.log(myStore.getState());

