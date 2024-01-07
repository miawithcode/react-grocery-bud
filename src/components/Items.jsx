import SingleItem from './SingleItem';

const Items = ({ items, removeItem, completeItem }) => {
  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} removeItem={removeItem} completeItem={completeItem} />
      })}
    </div>
  )
};
export default Items;
