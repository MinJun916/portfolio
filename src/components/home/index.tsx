import Header from '@/components/shared/Header';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import TechStack from '@/components/home/TechStack';
import Experience from '@/components/home/Experience';
import Projects from '@/components/home/Projects';
import Footer from '@/components/home/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
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
