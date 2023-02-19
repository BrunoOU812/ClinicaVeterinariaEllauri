import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" h-[41.35px] lg:h-[100px]"></div>
      <Hero />
      <Body />
    </div>
  );
}

export default App;
