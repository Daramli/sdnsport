import React from "react";
import Navbar from "../components/Navbar";
import DialogSelectCountry from "../components/DialogSelectCountry";
import { useThemeProvider } from "../hooks/useThemeProvider";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import Feedbacks from "../components/Feedbacks";
import Products from "../components/Products";
import Footer from "../components/Footer";

const HomePage = () => {
  const { showModal } = useThemeProvider();
  return (
    <>
      <Navbar />
      {showModal && <DialogSelectCountry />}
      <HeroSection />
      <OurServices />
      <Products />
      <Feedbacks />
      <Footer />
    </>
  );
};

export default HomePage;
