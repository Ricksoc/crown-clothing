import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = () => {
  const { cartItems, setCartDropdown } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div
      className="cart-icon-container"
      onClick={() =>
        setCartDropdown((prevCartDropdown) => {
          return !prevCartDropdown;
        })
      }
    >
      <BagIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
