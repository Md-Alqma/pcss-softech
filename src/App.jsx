import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Service } from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Service />
        <About />
      </main>
    </>
  );
}

export default App;
