import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ankur Saini | AI/ML Engineer & Data Science Enthusiast</title>
        <meta 
          name="description" 
          content="Portfolio of Ankur Saini - AI/ML Engineer and Data Science enthusiast with expertise in Python, machine learning, and deep learning. View projects, skills, and experience."
        />
        <meta name="keywords" content="Ankur Saini, AI Engineer, ML Engineer, Data Science, Python, Machine Learning, Deep Learning, Portfolio" />
        <link rel="canonical" href="https://ankursaini.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
