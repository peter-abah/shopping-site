const CartItem = (props) => {
  const { name, image, price, quantity } = props;

  return (
    <div className="flex p-4">
      <img className="mr-4" src={image} alt={name} width="100" height="100" />
      <div className="text-xl">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
