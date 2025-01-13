import { createStore, combineReducers } from "redux";


// state
const initialData = {
    productData:[]
}
// action
export const AddFood = (inputFood)=>{
    return {
        type: "Add_Food",
        payload:inputFood 
    }
}

// reducer 
const myFoodReducer = (state = initialData,action)=>{
    if(action.type == "Add_Food"){
        return {productData : action.payload}
}
return state;

}


const rootReducer = combineReducers({
    food:myFoodReducer
})

// myfood store
export const foodStore = createStore(rootReducer);