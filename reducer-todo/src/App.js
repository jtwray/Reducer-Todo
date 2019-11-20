import React, { useReducer } from "react";
import { initialState, todoReducer } from "../src/reducers/todoReducer";

import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

import "./App.css";


function App() {
const [state, dispatch] = useReducer( todoReducer,initialState);
 console.log("state from useReducer in App.js:",state)
  return (
    <div className="App">
      {state.todoCount}
      <TodoForm todoList={state.todoList} dispatch={dispatch} />
      <TodoList todoList={state.todoList} state={state} dispatch={dispatch}/>
    </div>
  );
}
export default App;
