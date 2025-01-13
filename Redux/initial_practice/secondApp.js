// //import redux
// const myRedux = require("redux");

// //create state
// const initailValue = {
//     noOfCake: 20,
//     noOfBread: 20
// }
// // Create Actions
// const buyCake = (cakeCount) => {
//     return {
//         type: "BUY_CAKE",
//         payload:cakeCount
//     }
// }

// const buyBread = (breadCount) => {
//     return {
//         type: "BUY_BREAD",
//         payload: breadCount
//     }
// }

// // create  Reducer
// const myReducer = (state = initailValue, action) => {
//     if (action.type == "BUY_CAKE") {
//         return {
//             noOfCake: state.noOfCake - action.payload,
//             noOfBread: state.noOfBread
//         }
//     }
//     if(action.type == "BUY_BREAD"){
//         return{
//             noOfBread:state.noOfBread- action.payload,
//             noOfCake: state.noOfCake
//         }
//     }
//     return state
// }

// // create redux store
// const abcBakery = myRedux.createStore(myReducer);
// // print initial number of cakes and breads
// console.log(abcBakery.getState());

// // moses
// abcBakery.dispatch(buyBread(2))
// abcBakery.dispatch(buyCake(5))
// // pring final number of cakes and breads
// console.log(abcBakery.getState());

// // moses
// abcBakery.dispatch(buyBread(5))
// abcBakery.dispatch(buyCake(2))

// console.log(abcBakery.getState());

//import redux
const myRedux = require("redux");

const initialCake = {
    noOfCakes: 20,
}

const initialBread = {
    noOfBreads: 20
}

const buyBread = (countOfBread)=>{
    return {
        type: "buy_Bread",
        payload: countOfBread
    }
}

const buyCake = (countOfCake)=>{
    return {
        type: "buy_Cake",
        payload: countOfCake
    }
}
// cake reducer
const cakeReducer = (state = initialCake, action) => {
    if(action.type == "buy_Cake") {
        return {
            noOfCakes: state.noOfCakes - action.payload
        }
    }
    return state
}
// bread Reducer
const breadReducer = (state = initialBread, action) => {
    if(action.type == "buy_Bread") {
        return {
            noOfBreads: state.noOfBreads - action.payload
        }
    }
    return state
}

// combining reducers
const combinedReducers = myRedux.combineReducers({
    cake:cakeReducer,
    bread:breadReducer
})

// creating my store
const myStore = myRedux.createStore(combinedReducers);
console.log(myStore.getState());

myStore.dispatch(buyBread(2))
myStore.dispatch(buyCake(2))

console.log(myStore.getState());
