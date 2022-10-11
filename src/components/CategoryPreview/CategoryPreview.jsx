import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
