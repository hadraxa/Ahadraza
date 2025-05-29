import HeroSec from "./heroSec";
import Strips from "./ui/strips";
import AboutSec from "./aboutSec";
import Edu_exp from "./edu_exp";
import Skills from "./Skills";
import Footer from "./footer";
import Projects from "./projects";
import Form from "./ui/form";

function Main() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSec />
      <Strips />
      <AboutSec />
      <Edu_exp />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </>
  );
}

export default Main;
