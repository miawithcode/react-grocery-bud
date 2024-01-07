import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';

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

  return (
    <section>
      <Form addItem={addItem} />
    </section>
  );
};
export default App;
