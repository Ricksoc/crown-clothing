import "./CartItem.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h2 className="name">{`${name}`}</h2>
        <span>{`${quantity} X ${price}`}</span>
      </div>
    </div>
  );
};

export default CartItem;