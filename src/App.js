import Wishlist from "./components/Wishlist";
import Vegetables from "./components/Vegetables";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Wishlist />
      <Vegetables name="tomatoes" quantity="10" />
      <Vegetables name="potatoes" quantity="8" />
      <Vegetables name="carrots" quantity="5" />
      <Vegetables name="onions" quantity="7" />
    </div>
  );
}

export default App;
