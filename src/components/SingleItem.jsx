import { useState } from 'react';

const SingleItem = ({ item, removeItem, completeItem }) => {

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => completeItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button type="button" onClick={() => removeItem(item.id)}>delete</button>
    </div>
  );
};
export default SingleItem;
