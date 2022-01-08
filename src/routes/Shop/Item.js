import { Link } from "react-router-dom";

const Item = (props) => {
  const { id, image, name, price } = props;

  return (
    <Link className="w-64 p-8" to={`/items/${id}`}>
      <div>
        <img className="mb-4" src={image} alt="name" width="200" height="200" />
        <h3 className="mb-2 text-lg">{name}</h3>
        <p>Price: ${price}</p>
      </div>
    </Link>
  );
};

export default Item;
