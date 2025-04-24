import "./App.css";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      {/* footer section */}
      <Footer />
    </>
  );
}

export default App;
