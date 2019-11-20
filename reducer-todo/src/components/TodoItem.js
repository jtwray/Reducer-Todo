import React, { useReducer } from "react"
import { initialState, todoReducer } from "../reducers/todoReducer"

export const TodoItem = ({ todoObj ,dispatch}) => {




    const toggleCompleted = (id) => {
         console.log("toggleCOmpletedis Firing onClick evenets","payload:",id);
         dispatch({ type: "TOGGLE_COMPLETED", payload: id }) }

    return (

        <div key={todoObj.id}
            className={`${
                todoObj.completed ? " completed" : ''
                }`}
            onClick={()=>toggleCompleted(todoObj.id)}

        >
            <p>{todoObj.todo}</p>
        </div>

    )
}