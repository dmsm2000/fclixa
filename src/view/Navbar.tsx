import React from "react";
import logoImage from "../assets/team_logo.png";

const NavBar: React.FC = () => {
  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="p-7 bg-gradient-to-b from-black to-transparent absolute top-0 w-full z-10">
      <div className="w-full">
        <a href="/" className="flex justify-center mb-4">
          <img src={logoImage} alt="Team Logo" className="w-12 h-16" />
        </a>

        <div className="flex">
          <div className="flex-grow w-[25%] text-center">
            <a
              onClick={() => scrollToElement("about")}
              className=" text-white hover:text-yellow-500 hover:cursor-pointer"
            >
              Sobre
            </a>
          </div>
          <div className="flex-grow w-[25%] text-center">
            <a
              onClick={() => scrollToElement("plantel")}
              className=" text-white hover:text-yellow-500 hover:cursor-pointer"
            >
              Plantel
            </a>
          </div>
          <div className="flex-grow w-[25%] text-center">
            <a
              onClick={() => scrollToElement("contacts")}
              href="#contacts"
              className=" text-white hover:text-yellow-500 hover:cursor-pointer"
            >
              Contatos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
