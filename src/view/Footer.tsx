import React from "react";
import useFadeInOnScroll from "../Hooks/UseFadeInOnScroll";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-blue-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://dmsm2000.github.io/portfolio/"
            className="hover:underline"
          >
            David Marques™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
