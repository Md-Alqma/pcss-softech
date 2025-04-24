import "./App.css";
import { About } from "./components/About";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Service } from "./components/Service";
import ShowCase from "./components/ShowCase";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Service />
        <About />
      </main>
      {/* show case section */}
      <ShowCase/>
      {/* footer section */}
      <Footer />
    </>
  );
}

export default App;
