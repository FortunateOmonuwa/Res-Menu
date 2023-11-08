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

        <p className="menu-des">
          Authentic Italian cuisine, 6 creative dishes to choose free. All from
          our stove oven, all organic, all delicious
        </p>
      </div>
      {pizzas.length > 0 ? (
        <div className="pizza-list">{pizzas}</div>
      ) : (
        <div
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "1.2em",
            paddingBlockStart: "1.3em",
          }}
        >
          Were currrently working on our menu. Please check back later
        </div>
      )}

      <div className="footer">
        {hour < closed && hour >= open && (
          <div>
            <p>
              We are currently open until {closed}:00. Come Visit us or order
              online
            </p>
            <Button />
          </div>
        )}
      </div>
      <p className="footer">
        {hour > closed &&
          `We are currently closed. We're open from ${open}am till ${closed}pm`}
      </p>
    </div>
  );
}

export default App;
