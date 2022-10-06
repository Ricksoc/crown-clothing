import { useNavigate } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  const navToCategoryPage = () => {
    navigate(`${title}`);
  };

  return (
    <div className="category-preview-container">
      <h2 className="title">
        <span onClick={navToCategoryPage}>{title.toUpperCase()}</span>
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
