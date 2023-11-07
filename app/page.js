import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import GallerySection from "./components/GallerySection";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Interview from "./components/Interview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
      <div className="h-[4000px]"></div>
    </main>
  );
}
