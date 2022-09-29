import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/CartIcon/CartIcon";

import { UserContext } from "../../contexts/Users";
import { CartContext } from "../../contexts/Cart";

import { userSignOut } from "../../utils/firebase/firebase";

import "./Navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/CartDropdown/CartDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartDropdown } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>{<CrwnLogo className="logo" />}</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
