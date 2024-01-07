import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};
export default App;
