import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" h-[41.35px] lg:h-[100px]"></div>
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
}

export default App;
