import { useEffect, useState } from "react";
import Pizza from "./Pizza";
import formatPrice from "./priceFormatter";
import Cart from "./Cart";

//Here the internationalization of currency
export default function Order() {
  //Here the hooks
  const [loading, setLoading] = useState(true);
  const [pizzaData, setPizzaData] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState("hawaiian");
  const [selectedSize, setSelectedSize] = useState("M");
  const [cartList, setCartList] = useState([]);

  //Here the loading validations
  var selectedPizzaData, formatedPrice;
  if (!loading) {
    selectedPizzaData = pizzaData.find((pizza) => {
      return selectedPizza == pizza.id;
    });
    formatedPrice = formatPrice(selectedPizzaData.sizes[selectedSize]);
  }
  //Here the data fetching
  async function fetchPizzaData() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch("/api/pizzas");
    const jsonres = await res.json();
    setPizzaData(jsonres);
    setLoading(false);
  }
  //Here the data(pizza order) posting
  async function checkout() {
    setLoading(true);
    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartList }),
    }); // Object destructuring: {cartList} same as {cartList:cartList}
    setCartList([]);
    setLoading(false);
  }

  //Here the effect hook
  useEffect(() => {
    fetchPizzaData();
  }, []);

  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setCartList([...cartList, { ...selectedPizzaData, selectedSize, formatedPrice }]);
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                name="pizza-type"
                id="pizza-type"
                onChange={(e) => setSelectedPizza(e.target.value)}
                value={selectedPizza}
              >
                {pizzaData.map((pizza) => {
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
                    name="pizza-size"
                    type="radio"
                    value="S"
                    checked={selectedSize == "S"}
                    onChange={(e) => {
                      setSelectedSize(e.target.value);
                    }}
                  />
                  <label htmlFor="pizza-s">S</label>
                </span>
                <span>
                  <input
                    id="pizza-m"
                    name="pizza-size"
                    type="radio"
                    value="M"
                    checked={selectedSize == "M"}
                    onChange={(e) => {
                      setSelectedSize(e.target.value);
                    }}
                  />
                  <label htmlFor="pizza-m">M</label>
                </span>
                <span>
                  <input
                    id="pizza-l"
                    name="pizza-size"
                    type="radio"
                    value="L"
                    checked={selectedSize == "L"}
                    onChange={(e) => {
                      setSelectedSize(e.target.value);
                    }}
                  />
                  <label htmlFor="pizza-l">L</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          <div className="order-pizza">
            {loading ? (
              <h3>loading data...</h3>
            ) : (
              <>
                <Pizza {...selectedPizzaData} />
                {/* Up there, a way to send parameters anonymously */}
                <p>{formatedPrice}</p>
              </>
            )}
          </div>
        </form>
      </div>
      <Cart cartList={cartList} checkout={checkout} />
    </div>
  );
}
