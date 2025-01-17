import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";


const AddItem = ({items, setItems}) => {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id +  1 : 1;
    const myNewItem = {id, checked: false, name: item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label className="offscreen" htmlFor="addItem">Add Item</label>
      <input 
        type="text" 
        id="addItem"
        placeholder="Add an Item"
        autoFocus
        required
        ref={inputRef}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button 
        type='submit'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus/>
      </button>
    </form>
  )
}

export default AddItem