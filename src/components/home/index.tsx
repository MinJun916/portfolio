import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Footer from '@/components/home/Footer';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import TechStack from '@/components/home/TechStack';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;
