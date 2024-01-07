import { useState } from "react"

const Form = () => {  
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div>
        <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
        <button type="submit">Add item</button>
      </div>
    </form>
  )
}
export default Form