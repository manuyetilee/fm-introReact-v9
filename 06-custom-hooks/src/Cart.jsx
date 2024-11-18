import formatPrice from "./priceFormatter";

export default function Cart({ cartList, checkout }) {
  var total = 0;
  for (let i = 0; i < cartList.length; i++) {
    //the advantage of using classic for vs for in, is that it doesnt excecute unless equality is matched
    let item = cartList[i];
    total = total + item.sizes[item.selectedSize];
  }
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartList.map((item, index) => (
          <li key={index}>
            <span className="size">{item.selectedSize}</span> -
            <span className="type">{item.name}</span> -
            <span className="price">{item.formatedPrice}</span>
          </li>
        ))}
      </ul>
      <p>Total: {formatPrice(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
