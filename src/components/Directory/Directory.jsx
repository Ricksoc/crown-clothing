import "./Directory.scss.scss";
import CategoryItem from "../CategoryItem/CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
