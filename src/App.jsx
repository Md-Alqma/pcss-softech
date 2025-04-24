import "./App.css";
import { About } from "./components/About";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Process } from "./components/Process";
import { Service } from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Service />
        <About />
        <Process />
      </main>
      {/* footer section */}
      <Footer />
    </>
  );
}

export default App;
