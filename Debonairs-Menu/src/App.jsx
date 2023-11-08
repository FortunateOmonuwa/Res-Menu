import { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
import "./App.css";
import pizzaData from "./data";
import Pizza from "./pizza";
import Header from "./Header";
import Button from "./Button";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(pizzaData);
  }, []);
  const pizzas = state.map((pizza) => <Pizza key={pizza.id} {...pizza} />);

  const hour = new Date().getHours();
  const open = 8;
  const closed = 12;

  return (
    <div className="main">
      <div className="main-header">
        <Header />
        <h2 className="our-menu">OUR MENU</h2>

        <p className="menu-des">
          Authentic Italian cuisine, 6 creative dishes to choose free. All from
          our stove oven, all organic, all delicious
        </p>
      </div>
      <div className="pizza-list">{pizzas}</div>

      <p className="footer">
        {hour < closed &&
          hour >= open &&
          `We are currently open until ${closed}:00. Come Visit us or order online`}
      </p>
      <p className="footer">
        {hour > closed &&
          `We are currently closed. We're open from ${open}am till ${closed}pm`}
      </p>
      <Button />
    </div>
  );
}

export default App;
