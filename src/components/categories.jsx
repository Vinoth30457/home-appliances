const Categories = ({ categories, filterMenuItems }) => {
  const clickHandler = (category) => {
    filterMenuItems(category);
  };
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => clickHandler(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
