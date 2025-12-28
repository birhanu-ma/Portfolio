import Navbar from "../component/layout/Navbar";
import Hero from "../component/home/Hero";
import About from "../component/about/About";
import TechStack from "../component/techStack/TechStack";
import Experience from "../component/experience/Experience";
import EducationAndCertification from "../component/education/EducationAndCertification";
import Contact from "../component/contact/Contact";
import "../App.css";
import Footer from "../component/layout/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <EducationAndCertification />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
