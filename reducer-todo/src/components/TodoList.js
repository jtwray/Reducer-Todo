import React from "react"
import { TodoItem } from './TodoItem'
export const TodoList = ({ todoList ,dispatch,state}) => {


    return (
        <div>
            {state.todoList.map(todoObj => <div key={`${todoObj.id}${todoObj.todo}`}>
                <TodoItem todoObj={todoObj} dispatch={dispatch} />
            </div>
            )}
        </div>
    )
}