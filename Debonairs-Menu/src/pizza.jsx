/* eslint-disable react/prop-types */
const Pizza = (props) => {
  const isDarkmode = true;

  const style = isDarkmode ? { color: "black" } : { color: "red" };

  return (
    <div className="pizzas">
      <img src={props.photoName} alt="" className="pizza-image" />
      <div className="content">
        <div>
          <h2 style={style}>{props.name}p</h2>
          <p>{props.ingredients}</p>
        </div>

        {props.soldOut ? (
          <div style={{ color: "red", display: "grid" }}>Sold Out</div>
        ) : (
          <span>{props.price + 3}</span>
        )}
      </div>
    </div>
  );
};

export default Pizza;
