// import React from "react";
import { createRoot } from "react-dom";
import Pizza from "./Pizza";

// function App() {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Padre Gino's"),
//     React.createElement(Pizza, {
//       name: "Pepperoni pizza",
//       description: "nice pizza",
//     }),
//     React.createElement(Pizza, {}),
//   ]);
// }
function App() {
  return (
    <div>
      <h1>Padre Gino's</h1>
      {/* Lower case elements are just DOM tags */}
      <Pizza
        name="Pepperoni"
        description="pep, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="ham, pineapple, n stuff"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="americano"
        description="french fries, hot dogs"
        image={"/public/pizzas/big_meat.webp"}
      />
      {/* Cammel case elements are components. This convention is obligaroty */}
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// root.render(React.createElement(App));
