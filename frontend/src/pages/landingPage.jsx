import { useEffect } from "react";
import Footer from "../components/footer";
import HeroSection from "../components/Herosection";
import Navbar from "../components/Navbar";
import PricingSection from "../components/Pricingsection";
import SecureSection from "../components/Securesection";
import StepsDiscoverSection from "../components/stepsdiscoversection";
import TransformPdfSection from "../components/transformpdfsection";
import { useLocation } from "react-router-dom";
import Categories from "../components/categories";



export default function LandingPage(){
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // e.g., "#aboutus"
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait a bit to ensure DOM is ready
      }
    }
  }, [location]);
    return(
        <>
        <Navbar />
        <main>
        <HeroSection />
        <Categories/>
        <TransformPdfSection />
        <StepsDiscoverSection />
        <SecureSection  />
        <PricingSection />
        </main>
        <Footer/>
        </>
    );
}