import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { updateTodoItem } from '../../store/todoSlice';

import './EditTodo.css';

const EditTodo = ({ isEdit, setIsEdit, content, listId }: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(content.name);
  const [description, setDescription] = useState(content.description);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      updateTodoItem({
        listId,
        id: content.id,
        itemName: title,
        itemDescription: description,
      })
    );
    setIsEdit(false)
  };

  return (
    <div className={`edit__todo ${isEdit ? 'active' : ''} `}>
      <h5>
        <BsArrowLeft
          fontSize={'1rem'}
          cursor={'pointer'}
          onClick={() => {
            setIsEdit(false);
          }}
        />
        <span>Edit Todo</span>
      </h5>

      <form className='edit__form' onSubmit={(e) => handleUpdate(e)}>
        <input
          type='text'
          placeholder='Carrot'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=''
          id=''
          placeholder='Carrot improves eyesight.'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default EditTodo;
