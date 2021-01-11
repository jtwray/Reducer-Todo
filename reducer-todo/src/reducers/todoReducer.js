export const initialState = {
  todoList: [{ todo: "walk thumper", completed: false, id: Date.now() }],
  todoCount: 1,
  newTodo: ""
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const nextTodo = {
        todo: action.payload,
        completed: false,
        id: Date.now()
      };

      console.log(
        "state.todoList::::",
        state.todoList,
        "nextTodo:::",
        nextTodo,
        "action.payload::::",
        action.payload
      );
      return {
        ...state,
        todoList: [...state.todoList, nextTodo],
        todoCount: state.todoList.length
      };
    }

    case "TOGGLE_COMPLETED": {
      console.log(
        "TOGGLE_COMPLETED is firing in the reducers/  action.payload:",
        action.payload
      );

      const todoCopy = state.todoList.map((todoObj) => {
        if (todoObj.id === action.payload) {
          return {
            ...todoObj,
            completed: !todoObj.completed
          };
        }
        return todoObj;
      });
      return {
        ...state,
        todoList: todoCopy,
        todoCount: todoCopy.length
      };
    }

    case "CLEAR_COMPLETED": {
      const filteredTodos = state.todoList.filter(
        (todoObj) => todoObj.completed === false
      );
      return {
        ...state,
        todoList: filteredTodos,
        todoCount: filteredTodos.length
      };
    }
    default:
      return state;
  }
};
