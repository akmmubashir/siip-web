import React from "react";
import { Navigation } from "../components/siip/Navigation";
import { Footer } from "../components/siip/Footer";
import SignalsPageSection from "../components/siip/SignalsPageSection";

const page = () => {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <SignalsPageSection />
      <Footer />
    </div>
  );
};

export default page;
