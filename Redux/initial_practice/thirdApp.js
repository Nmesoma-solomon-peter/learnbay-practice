// importing redux which I have downloaded.
const myRedux = require("redux");

// creating the State(data)
const initailNumberOfLaptops = {
    noOfLaptop : 30
}
// Creating the Action
const myAction = ()=>{
    return{
        type : "Buy Lapi"
    }
}

// create the reducer
const myReducer = (state = initailNumberOfLaptops,action)=>{
    if(action.type == "Buy Lapi"){
        return{
            noOfLaptop : state.noOfLaptop - 1
        }
    }
    return state;
}

// creating the redux store
const myReduxStore = myRedux.createStore(myReducer);
console.log(myReduxStore.getState());
myReduxStore.dispatch(myAction());
console.log(myReduxStore.getState());
