import "./App.css";
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
      </main>
    </>
  );
}

export default App;
