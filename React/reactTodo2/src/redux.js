import { combineReducers, createStore,  } from "redux";

// create  state;
const initialTask = {
    allTask : []
}
// actions
export const addTodo = (input)=>{
    return {
        type:"Add task",
        payload : input
    }
}

// create reducer
const myReducer = (state = initialTask, action)=>{
    if(action.type == "Add task"){
        return{
            allTask :[...state.allTask,action.payload]
        }
    }
    return state
}

const allTodoTasks = {
    add:myReducer
}
const rootReducer = combineReducers({
    add:myReducer
});
export const myStore = createStore(rootReducer)