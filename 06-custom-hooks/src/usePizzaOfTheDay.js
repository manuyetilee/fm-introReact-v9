import { useState, useEffect, useDebugValue } from "react";

const usePizzaOfTheDay = function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `id - ${pizzaOfTheDay.id}` : "loading...");
  //This is purely for the react devtools
  useEffect(() => {
    (async function fetchPizzaData() {
      const url = "/api/pizza-of-the-day";
      const data = await fetch(url);
      const parsedData = await data.json();
      setPizzaOfTheDay(parsedData);
    })();
  }, []);

  return pizzaOfTheDay;
};

export default usePizzaOfTheDay;
