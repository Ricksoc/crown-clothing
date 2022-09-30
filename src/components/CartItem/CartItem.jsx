import "./CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{`${quantity} X ${price}`}</span>
    </div>
  );
};

export default CartItem;
