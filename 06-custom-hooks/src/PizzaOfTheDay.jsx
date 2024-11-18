import usePizzaOfTheDay from "./usePizzaOfTheDay";
import formatPrice from "./priceFormatter";

export default function PizzaOfTheDay() {
  const pizzaOfTheDay = usePizzaOfTheDay();
  let price = 0;
  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  } else {
    //a null value cannot access S, so we make sure to access it when the object value is set
    price = formatPrice(pizzaOfTheDay.sizes.S);
  }
  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <h3>{pizzaOfTheDay.name}</h3>
          <p>{pizzaOfTheDay.description}</p>
          <p className="pizza-of-the-day-price">{price}</p>
        </div>
        <img
          className="pizza-of-the-day-image"
          src={pizzaOfTheDay.image}
          alt={pizzaOfTheDay.description}
        />
      </div>
    </div>
  );
}
