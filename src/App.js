import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w-full overflow-hidden">
      <Header />
      <div className=" h-[41.35px] lg:h-[100px]"></div>
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
