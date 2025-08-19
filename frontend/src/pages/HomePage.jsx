import React from "react";
import Hero from "../components/Home/Hero";
import MyWardrobe from "../components/Home/MyWardrobe";
import ColorInDashboard from "../components/Home/ColorInDashboard";
import DailyDose from "../components/Home/DailyDose";
import Section from "../components/Home/Section";
import NewsletterForm from "../components/Home/NewsletterForm";

function HomePage() {
  return (
    <div className="px-4 py-5 sm:px-28 sm:py-10 md:px-28 md:py-10">
      <Hero />
      <MyWardrobe />
      <ColorInDashboard />
      <DailyDose />
      <Section />
      <NewsletterForm />
    </div>
  );
}

export default HomePage;
