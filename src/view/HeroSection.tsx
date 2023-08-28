import React from "react";
import heroImage from "../assets/hero.jpg";
import "./style/HeroSection.css"

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  const heroStyles: React.CSSProperties = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <header
      id="up"
      className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative"
      style={heroStyles}
    >
      <div className="h-screen bg-opacity-70 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
          <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            <span className="text-white">{title}</span>
          </h1>
          <br />
          <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            <span className="text-white">{subtitle}</span>
          </h2>
        </div>
        
      </div>
      <div className="scroll-down"></div>
    </header>
  );
};

export default HeroSection;
