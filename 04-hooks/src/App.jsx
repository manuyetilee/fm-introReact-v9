import { createRoot } from "react-dom/client";
import Order from "./Order";

function App() {
  return (
    <div>
      <h1 className="logo">Padre Gino's</h1>
      <Order />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
