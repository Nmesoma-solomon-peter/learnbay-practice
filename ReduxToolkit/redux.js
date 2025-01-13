const redux = require("redux");
// const dispatch = require("react-redux");


const initialData = {
    noOfPhones : 10
}

const buyPhone = (phones)=>{
    return {
        type:"Buy_Phone",
        payload:phones
    }

}

const myPhoneReducer = (state = initialData, action)=>{
    if(action.type == "Buy_Phone"){
        return{
            noOfPhones:state.noOfPhones - action.payload
        }
    }
    return state;
}

const rootReducer = redux.combineReducers({
    phone:myPhoneReducer
})

const myStore =  redux.createStore(rootReducer);
myStore.dispatch(buyPhone(4));

console.log(myStore.getState());

