import React, { useState } from 'react'
import { VscEdit } from 'react-icons/vsc'
import { ReactComponent as AddTodo } from '../../assets/AddTodo.svg'
import './TodosItem.css'
import EditTodo from '../EditTodo/EditTodo'

const TodosItem = ({ item, listId }: any) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <div className={`todo__item ${isEdit ? 'edit__line' : ''}`} >
        <div className="todo__item__header">
          <div>
            <AddTodo />
            <h3>{item.name}</h3>
          </div>
          <div className='edit__icon'>
            <VscEdit onClick={() => setIsEdit(true)} />
          </div>
        </div>
        <div className="todo__item__description">
          {item.description}
        </div>
      </div >

      <EditTodo isEdit={isEdit} setIsEdit={setIsEdit} content={item} listId={listId} />

    </>
  )
}

export default TodosItem