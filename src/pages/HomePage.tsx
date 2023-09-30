import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurChallenges from "../components/OurChallenges";
import Problems from "../components/Problems";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
      <section
        id="hero"
        className="snap-start">
        <Header />

        <Hero />
      </section>
      <section
        id="about"
        className="snap-center px-5">
        <About />
      </section>
      <section
        id="challenges"
        className="snap-center px-5">
        <OurChallenges />
      </section>
      <section
        id="problems"
        className="snap-center">
        <Problems />
      </section>
      <section className="snap-center">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
