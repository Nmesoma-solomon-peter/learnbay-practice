// import redux
const myRedux = require("redux");

// create the state / data to be stored
const initialData = {
    noOfCakes : 10,
    noOfBreads : 10
}

// create two actions each to handle a single task
// cake action
const buyCake = (cakes)=>{
    return {
        type: "BUY_CAKE",
        payload : cakes
    }
    
}
// bread action
const buyBread = (bread)=>{
    return{
        type : "BUY_BREAD",
        payload : bread
    }
}

// create two reducers to take charge of each action
const cakeReducer = (state = initialData,action)=>{
    if(action.type == "BUY_CAKE"){
        return{
            noOfCakes : state.noOfCakes - action.payload,
        }
    }
    return state;
}

const breadReducer = (state = initialData, action)=>{
    if(action.type == "BUY_BREAD"){
        return{
            noOfBreads : state.noOfBreads - action.payload,
        }
    }
    return state;

}
// combine the reducers
const myBakeryReducer = myRedux.combineReducers({
    cake : cakeReducer,
    bread : breadReducer
});

// create the store to store the initialData
const myBakery = myRedux.createStore(myBakeryReducer);
// console.log(myBakery.getState());
myBakery.dispatch(buyBread(5))
myBakery.dispatch(buyCake(5))
console.log(myBakery.getState());


