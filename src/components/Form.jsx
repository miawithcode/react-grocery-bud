import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) {
      toast.error("name can not be empty!")
      return;
    }
    addItem(newItem);
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add item</button>
      </div>
    </form>
  );
};
export default Form;
