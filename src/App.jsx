import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  }

  return (
    <section>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};
export default App;
