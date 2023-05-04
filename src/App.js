import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData } from "./components/Products/Data";

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <Hero />
      <Products heading="choose your favorite" data={ProductData} />
    </Router>
  );
}

export default App;
