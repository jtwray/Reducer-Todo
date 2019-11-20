import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from "../reducers/todoReducer"
export const TodoForm = ({dispatch,state}) => {

	const [newTodo, setnewTodo] = useState("")


	const handleChanges = (e) => {
		setnewTodo(e.target.value);
		console.log("newTodo:", newTodo)
	}
	const addTodo = () => {
	
		dispatch({ type: "ADD_TODO", payload: newTodo });
	
	}




	const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });



	return (
		<>

			<input
				name="newTodo"
				value={newTodo}
				onChange={handleChanges}
			/>

			<button onClick={() => addTodo()}>add task</button>
			<button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>clear completed</button>

		</>
	)


}