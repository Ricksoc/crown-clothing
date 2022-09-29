import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = () => {
  const { setCartDropdown } = useContext(CartContext);

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
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
