import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
//import Test from "./Test";
const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Homepage">Parallax</section>
      <section id="Services"> Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact"> Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
