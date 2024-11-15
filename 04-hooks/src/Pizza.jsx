function Pizza(props) {
  return (
    <div className="pizza">
      <h2>{props.name ? props.name : "oops no pizza here"}</h2>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Pizza;
