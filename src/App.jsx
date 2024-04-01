import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav } from "./components/Navbar/Nav";
import Main from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { motion, useScroll } from "framer-motion"


function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    Aos.init();
  });
    
  return (
    <div className="w-full">
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      /> 
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
