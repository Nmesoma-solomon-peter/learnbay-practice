// import {createStore , combineReducers} from 'redux'
import { configureStore,combineReducers, createSlice } from '@reduxjs/toolkit';

// create state 
const initialData = {
    allTask : []
};

// create Action
// export const addTask = (recievedData)=>{
//     return {
//         type:"ADD_TASK",
//         payload:recievedData
//     }
// }

// create Reducer
// const taskReducer = ( state =  initialData, action)=>{
//     if(action.type == "ADD_TASK"){
//         return{
//             allTask:[...state.allTask, action.payload]
//         }
//     }
//     return state;
// }
const todoSlice = createSlice({
    name:"ADD_TASK",
    initialState:{
        allTask : []
    },
    reducers:{
        add_Task:(state,action)=>{
            state.allTask.push(action.payload)
        }
    }
})

export const {add_Task} = todoSlice.actions

// combined reducer
const rootReducer = combineReducers(
    {
        task:todoSlice.reducer
    }
)

// export const todoStore = createStore(rootReducer); 
export const todoStore = configureStore({reducer:rootReducer}); 
