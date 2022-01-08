const CartItem = (props) => {
  const { name, image, price, quantity } = props;

  return (
    <div className="flex m-8 w-auto sm:w-80">
      <img className="mr-4" src={image} alt={name} width="100" height="100" />
      <div className="text-xl">
        <p className="mb-3">{name}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
