import "./style.css";
import "./App.css";
import HeaderShopCart, { Product } from "./shopCart";
import { Checkout } from "./shopCart";

function App() {
  return (
    <div className="">
      <HeaderShopCart />
      <Product price1="$5.99" price2="$9.99" />
      <Checkout />
    </div>
  );
}

export default App;
