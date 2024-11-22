import formatPrice from "./priceFormatter";

export default function Cart({ cart, checkout }) {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    //the advantage of using classic for vs for in, is that it doesnt excecute unless equality is matched
    let item = cart[i];
    total = total + item.pizza.sizes[item.size];
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> -
            <span className="type">{item.pizza.name}</span> -
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {formatPrice(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
