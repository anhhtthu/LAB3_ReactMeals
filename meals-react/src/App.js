import "./App.css";
import Cart from "./screens/Cart";
import Description from "./screens/Description";
import Header from "./screens/Header";
import MealList from "./screens/MealList";
import CartBackDrop from "./screens/CartBackDrop";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <MealList />
      <Cart />
      <CartBackDrop />
    </div>
  );
}

export default App;
