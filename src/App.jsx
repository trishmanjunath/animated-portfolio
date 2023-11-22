import "./app.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import AboutMe from "./components/aboutme/aboutme";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar></Navbar>
      <Header/>
    </section>
    <section id="About Me"><AboutMe/></section>
    <section>skills</section>
    <section  id="Portfolio">portfolio</section>
    <section>portfolio1</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section  id="Reviews"></section>
    <section>reviews</section>
    <section id="Contact Me">contact</section>

  </div>;
};

export default App;
