import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {

  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        type='text'
        id='addItem'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button 
      aria-label='Add Item'
      onClick={() => inputRef.current.focus()}
      type='submit'>
        <FaPlus/>
      </button>
    </form>
  )
}

export default AddItem