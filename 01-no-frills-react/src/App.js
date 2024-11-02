const Pizza = function (props) {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      {},
      props.name ? props.name : "oops... data is empty"
    ),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The pepperoni pizzsa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.",
    }),
    React.createElement(Pizza, {
      name: "The mozzarella pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.",
    }),
    React.createElement(Pizza, {
      name: "The cheese pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.",
    }),
    React.createElement(Pizza, {
      name: "The pineapple pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.",
    }),
    React.createElement(Pizza, {}),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
