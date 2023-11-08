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
  const closed = 22;

  return (
    <div className="main">
      <div className="main-header">
        <Header />
        <h2 className="our-menu">OUR MENU</h2>
        <p>{hour > closed && `We are currently closed`}</p>
        <p className="menu-des">
          Authentic Italian cuisine, 6 creative dishes to choose free. All from
          our stove oven, all organic, all delicious
        </p>
      </div>
      <div className="pizza-list">{pizzas}</div>

      <p className="footer">
        We are open until 22:00. Come visit us or order online
      </p>
      <Button />
    </div>
  );
}

export default App;
