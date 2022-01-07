import Item from './Item';
import getItems from '../../data'

const Shop = () => {
  const items = getItems();

  return (
    <div>
      {items.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
};

export default Shop;
