import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo} from "../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          
          <p className='sm:block text-white text-[18px] font-bold cursor-pointer flex '>
          dhruvgupta
          </p>
        </Link>

        <div className='sm:flex gap-5'>
          <div
              className={`top2 ${"text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer`}
            >
              <a href="https://docs.google.com/document/d/1zoEHbJbsMpREOdCF2KBhH-bjsMd0obBP/edit?usp=sharing&ouid=101861989317385478067&rtpof=true&sd=true" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar