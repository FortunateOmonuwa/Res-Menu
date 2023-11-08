/* eslint-disable react/prop-types */
const Pizza = ({ photoName, name, ingredients, price, soldOut }) => {
  const isDarkmode = true;

  const style = isDarkmode ? { color: "black" } : { color: "red" };

  return (
    <div className={soldOut ? "sold-out" : "pizzas"}>
      <img src={photoName} alt="" className="pizza-image" />
      <div className="content">
        <div>
          <h2 style={style}>{name}p</h2>
          <p>{ingredients}</p>
        </div>

        {soldOut ? <div>Sold Out</div> : <span>{price + 3}</span>}
      </div>
    </div>
  );
};

export default Pizza;
