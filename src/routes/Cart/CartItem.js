const CartItem = (props) => {
  const { name, image, price, quantity } = props;

  return (
    <div>
      <img src={image} alt={name} width="100" height="100" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{quantity}</p>
    </div>
  );
};

export default CartItem;
