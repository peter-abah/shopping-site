import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../data';

const Item = (props) => {
  const [ quantity, setQuantity ] = useState(1);

  const { itemId } = useParams();
  const item = getItem(Number(itemId));

  const changeQuantity = (e) => {
    const quantity = Number(e.target.value);
    setQuantity(quantity);
  };

  const addItem = () => {
    props.addItem({ ...item, quantity });
  };

  const { name, image, price } = item;
  return (
    <div>
    <img src={image} alt="name" width="200" height="200" />
    <h3>{name}</h3>
    <p>{price}</p>
    <label >Quantity <input type="number" min="1" value={quantity} onChange={changeQuantity} /></label>
    <button onClick={addItem}>Add to Cart</button>
  </div>
  );
};

export default Item;
