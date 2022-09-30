import "./ProductCard.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const clickHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Button buttonType="inverted" inputProps={{ onClick: clickHandler }}>
        ADD TO CART
      </Button>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
