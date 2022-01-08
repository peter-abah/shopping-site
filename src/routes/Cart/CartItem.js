import DelIcon from "@mui/icons-material/Delete";

const CartItem = (props) => {
  const { id, name, image, price, quantity } = props;

  const handleClick = () => props.removeItem(id);

  return (
    <div className="flex m-8 w-auto sm:w-80">
      <img className="mr-4" src={image} alt={name} width="100" height="100" />
      <div className="text-xl">
        <p className="mb-3">{name}</p>
        <p className="mb-3">Price: ${price}</p>
        <p className="mb-3">Quantity: {quantity}</p>
        <button onClick={handleClick} className="!text-red-500 flex items-center border-b border-solid py-2 hover:scale-95 transition-transform">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
