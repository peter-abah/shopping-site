import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, image, name, price } = props;

  return (
    <Link to={`/items/${id}`}>
      <div>
        <img src={image} alt="name" width="200" height="200" />
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </Link>
  );
};

export default Item;
