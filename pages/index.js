import AOS from "aos";
import { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GetCyborgApe from "../components/GetCyborgApe";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header title="Cyborg Ape" />
      <div className="font-body text-dark">
        <div className="bg-white py-2 md:py-4">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-white my-12 md:my-28">
          <GetCyborgApe />
        </div>
        <div className="bg-white my-12 md:my-28">
          <Roadmap />
        </div>
        <div className="bg-white my-12 md:my-28">
          <Faq />
        </div>
        <div className="bg-white my-12 md:my-28">
          <Footer />
        </div>
      </div>
    </>
  );
}
