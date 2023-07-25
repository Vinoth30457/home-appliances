const Applinces = ({ id, title, price, img, desc }) => {
  return (
    <article className="menu-items">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">₹{price}.00</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default Applinces;
