import React from 'react';
import Hero from './Hero';
import About from './About';
import Courses from './Courses';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import WhyTejas from './WhyTejas';
// import TawkToChat from './TawkToChat'; // Commented out

const MainContent: React.FC = () => {
  return (
    <>
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16 bg-gray-50">
          <About />
        </section>
        <section id="why-tejas" className="py-8">
          <WhyTejas />
        </section>
        <section id="courses" className="py-12">
          <Courses />
        </section>
        <section id="clients" className="py-16">
          <Clients />
        </section>
        <section id="contact" className="py-16 bg-gray-100">
          <Contact />
        </section>
      </main>
      <Footer />
      {/* <TawkToChat /> */} {/* Commented out */}
    </>
  );
};

export default MainContent;
