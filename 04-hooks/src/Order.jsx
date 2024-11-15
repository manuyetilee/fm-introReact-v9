import { useEffect, useState } from "react"; //every useXXX functionality react name is a hook
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
  //browser supoorted JS feature
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  //start state hook with nothing
  const [loading, setLoading] = useState(true);

  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  //Hooks rely on strict order, otherwise one hook can overwrite its data to the other one
  //Therefore hooks never go inside of ifs or any kind of loops

  //useState hooks let us to preserve a value(or state) of a variable after the site is re-rendered. It does this by using the setter function
  //The site re-renders whenever that variable gets updated
  //useState initializes the hook

  //We use const because that way we signal to the reader that we cannot assign this value in another place that is not this hook

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType == pizza.id);
    price = intl.format(selectedPizza.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes(params) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);
  //We need to fetchPizzaTypes only the first time the page renders, otherwise it will fetch with every render, therefore we use the hook useEffect
  //useEffect hook help us to manage things outside of the renders
  //Passing an empty array ensure it will run once, but passing a variable/s will make to run everytime that/those variable/s changes, ex:
  // by putting [pizzaSize], every time the user selects a different pizzaSize this useEffect will get run again

  if (loading) {
    //There's another, more conventional way to do this but this is ok too
    //instead of replacing all the content with a loading message, we can just add a loading message into the component that is being loaded
    return <h1>loading...</h1>;
  }

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form action="">
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)} //sets the "pizzaType" value with "e.target.value"
              name="pizza-type"
              value={pizzaType}
              id="pizza-type"
            >
              {/* <option value="pepperoni">The Pepperoni Pizza</option>
              <option value="hawaiian">The Hawaiian Pizza</option>
              <option value="big_meat">The Big Meat pizza</option> */}
              {pizzaTypes.map((pizza) => {
                return (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-s">Pizza Size</label>
            <div>
              <span>
                <input
                  id="pizza-s"
                  value="S"
                  name="pizza-size"
                  type="radio"
                  checked={pizzaSize == "S"}
                  onChange={(e) => {
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  id="pizza-m"
                  value="M"
                  name="pizza-size"
                  type="radio"
                  checked={pizzaSize == "M"}
                  onChange={(e) => {
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  id="pizza-l"
                  value="L"
                  name="pizza-size"
                  type="radio"
                  checked={pizzaSize == "L"}
                  onChange={(e) => {
                    setPizzaSize(e.target.value);
                  }}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizza">
            <Pizza {...selectedPizza} />
            <p>
              <strong>{price}</strong>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
