import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import './TodoPage.css'
import TodoList from '../components/TodoList/TodoList';
import { addTodoList } from '../store/todoSlice';
import { RootState } from '../store/store';
import { loadState } from '../store/storage';


interface TodoItem {
  tile: string,
  description: string
}

interface TodoListProps {
  id: number;
  listName: string;
  todoItems: TodoItem[];
}


const TodoPage = () => {
  const dispatch = useDispatch()
  const todoLists = useSelector((state: RootState) => state.todo.todoLists)
  const [listName, setListName] = useState<string>('')




  // if (listName.trim() === '') return;

  const handleAddTodoList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newList: TodoListProps = {
      listName,
      id: Date.now(),
      todoItems: []
    }
    if (newList.listName === '') {
      alert('Add a list name')
      return
    }
    setListName('')

    dispatch(addTodoList(listName))
  }


  return (
    <div className='todo__app'>
      <Navbar />

      <div className="todo__page">

        <div className='todo__lists'>
          {
            todoLists.map((list) => (<div key={list.id}>
              <TodoList listItem={list} />
            </div>
            ))
          }

          <form className='todo__lists__form' onSubmit={handleAddTodoList}>
            <div className="form__group">
              <input type="text" placeholder='Add Todo List' value={listName} onChange={(e) => setListName(e.target.value)} />
              <button type='submit'>+</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  );
};

export default TodoPage;
