import "./ProductCard.scss";

import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Button>ADD TO CART</Button>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
