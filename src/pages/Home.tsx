import NavBar from "../view/Navbar";
import HeroSection from "../view/HeroSection";
import Footer from "../view/Footer";
import About from "../view/About";
import Leadership from "../view/Leadership";
import Contact from "../view/Contact";
import TeamSlider from "../view/TeamSlider";


const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        title="F.C.Lixa"
        subtitle="O orgulho de todos os Lixenses💙"
      />
      <About />
      <Leadership />
      <TeamSlider />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
