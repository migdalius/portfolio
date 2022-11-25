import { useContext } from "react";
import Intro from "../src/components/intro/Intro";
import Contact from "./components/contact/Contact";
import About from "./components/intro/about/About";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode && "#fff",
      }}
    >
      <Toggle />
      <Intro />
      {/* <About /> */}
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
