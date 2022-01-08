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
    <div className="w-fit mx-auto px-[7.5vw] pb-8">
      <Link className="block w-fit mb-6 hover:scale-95 active:scale-105 transition-transform" to="/shop">
        <BackIcon className="!text-4xl" />
      </Link>
      <div className="w-fit md:flex">
        <img
          className="mx-auto w-4/5 mb-6 max-w-[20rem] md:mb-0 md:mx-0 md:mr-8"
          src={image}
          alt="name"
          width="200"
          height="200"
        />
        <div>
          <h3 className="mb-4 text-2xl">{name}</h3>
          <p className="mb-4 text-2xl">Price: ${price}</p>
          <button
            className="w-fit text-2xl px-4 py-2 border border-solid transition-transform hover:border-none hover:scale-95 active:scale-105"
            onClick={addItem}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
