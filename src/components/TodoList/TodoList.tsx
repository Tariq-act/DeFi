import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { ReactComponent as TodoAddIcon } from '../../assets/AddTodo.svg'

import './TodoList.css'
import { addTodoItem } from '../../store/todoSlice';

import TodosItem from '../TodosItem/TodosItem';




const TodoList = ({ listItem }: any) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault()

    if (title === '' && description === '') {
      alert('Please Enter the title and description')
      return
    }

    dispatch(addTodoItem({ listId: id, itemName: title, itemDescription: description }))
    setTitle('')
    setDescription('')
  }



  return (
    <div className='todo__list'>
      <h5>List : {listItem.listName}</h5>
      <form className='todo__list__form' onSubmit={(e) => handleSubmit(e, listItem.id)}>
        <div className="todo__list__title">
          <TodoAddIcon />
          <input type="text" placeholder='Add Todo' value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type='submit'>+</button>
        </div>
        <textarea name="" className='todo_description' placeholder='Add Todo Description' rows={4} style={{ resize: 'none' }} value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
      </form>
      <div className='todo__item__list'></div>
      {
        listItem.todoItems.map((item: any) => (
          <div key={item.id}>
            <TodosItem item={item} listId={listItem.id} />
          </div>
        ))
      }

    </div>
  )
}

export default TodoList