import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BackIcon from "@mui/icons-material/ArrowBack";
import { getItem } from "../data";

const Item = (props) => {
  const { itemId } = useParams();
  const item = getItem(Number(itemId));

  const addItem = () => {
    props.addItem({ ...item, quantity: 1 });
  };

  const { name, image, price } = item;
  return (
    <div className="px-[7.5vw] py-10">
      <Link className="block w-fit mb-6" to="/shop">
        <BackIcon className="!text-4xl" />
      </Link>
      <img
        className="mx-auto w-4/5 mb-6"
        src={image}
        alt="name"
        width="200"
        height="200"
      />
      <h3 className="mb-4 text-2xl">{name}</h3>
      <p className="mb-4 text-2xl">Price: ${price}</p>
      <button
        className="w-fit text-2xl px-4 py-2 border border-solid"
        onClick={addItem}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
