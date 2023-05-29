import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



export interface TodoItem {
  id: number,
  name: string,
  description: string
}



export interface TodoList {
  id: number,
  listName: string
  todoItems: TodoItem[]
}


interface TodoState {
  todoLists: TodoList[]
}

const initialState: TodoState = {
  todoLists: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoList: (state, action: PayloadAction<string>) => {
      const newTodoList: TodoList = {
        id: Date.now(),
        listName: action.payload,
        todoItems: []
      }
      state.todoLists.push(newTodoList)

    },
    addTodoItem: (state, action: PayloadAction<{ listId: number, itemName: string, itemDescription: string }>) => {
      const { listId, itemName, itemDescription } = action.payload;

      const list = state.todoLists.find((list) => list.id === listId);

      if (list) {
        const newItem: TodoItem = { id: Date.now(), name: itemName, description: itemDescription };
        list.todoItems.push(newItem);
      }


    },

    updateTodoItem: (state, action) => {
      const { listId, id, itemName, itemDescription } = action.payload

      const todoList = state.todoLists.find((list) => list.id === listId)

      if (todoList) {
        const todoItem = todoList.todoItems.find(item => item.id === id)

        if (todoItem) {
          todoItem.name = itemName;
          todoItem.description = itemDescription;
        }

      }
    }

  }
})

const persistConfig = {
  key: 'root',
  storage
}

export const persistedReducer = persistReducer(persistConfig, todoSlice.reducer)



export const { addTodoList, addTodoItem, updateTodoItem } = todoSlice.actions;
export default todoSlice.reducer;