import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = () => {
  const { cartCount, setCartDropdown } = useContext(CartContext);

  const toggleCartDropdown = () =>
    setCartDropdown((prevCartDropdown) => !prevCartDropdown);

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <BagIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
