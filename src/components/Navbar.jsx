import React, { useState, memo } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import CV from "../assets/Yhonatan Peguero-CV.pdf";

// Memoizar componentes que no cambian frecuentemente
const NavLink = memo(({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    offset={-70}
    spy={true}
    activeClass="text-pink-600 shadow-[0_4px_0_rgb(219,39,119)]"
    className="hover:text-gray-300 cursor-pointer px-4 py-2 transition-all duration-300 hover:shadow-[0_4px_0_rgb(156,163,175)]"
  >
    {children}
  </Link>
));

// Memoizar íconos sociales
const SocialIcon = memo(({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex justify-between items-center w-full text-gray-300"
  >
    {children}
  </a>
));

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      {/* Navbar principal */}
      <div className="fixed w-full top-0 h-[80px] flex justify-between items-center px-4 bg-[#0a192f]/95 backdrop-blur-sm text-gray-300 shadow-lg z-50">
        <div className="container mx-auto max-w-[1000px] flex items-center justify-between">
          <Link to="home" smooth={true} duration={500}>
            <img src={Logo} alt="Logo" style={{ width: "75px" }} />
          </Link>
          {/* Menu */}
          {/* @media screen and min-width(768px) {display:flex} === md:flex */}
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <li>
                <NavLink to="home" smooth={true} duration={500}>
                  Inicio
                </NavLink>
              </li>
              {/* <li>About</li> */}
              <li>
                <NavLink to="skills" smooth={true} duration={500}>
                  Habilidades
                </NavLink>
              </li>
              <li>
                <NavLink to="work" smooth={true} duration={500}>
                  Proyectos
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" smooth={true} duration={500}>
                  Contáctame
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Hamburger */}
          <div className="md:hidden z-10" onClick={handleClick}>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
          {/* Mobile menu */}
          {/* width:100% === w-full     height:100vh === h-screen */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            }
          >
            <li className="py-6 text-4xl">
              <NavLink onClick={handleClick} to="home" smooth={true} duration={500}>
                Inicio
              </NavLink>
            </li>
            {/* <li className="py-6 text-4xl">
              {" "}
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
              </Link>
            </li> */}
            <li className="py-6 text-4xl">
              {" "}
              <NavLink
                onClick={handleClick}
                to="skills"
                offset={-70}
                smooth={true}
                duration={500}
              >
                Habilidades
              </NavLink>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <NavLink
                onClick={handleClick}
                offset={-70}
                to="work"
                smooth={true}
                duration={500}
              >
                Proyectos
              </NavLink>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <NavLink
                onClick={handleClick}
                offset={-70}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contáctame
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Social icons - MOVIDO FUERA DEL NAVBAR */}
      <div className="hidden lg:flex fixed flex-col top-1/2 -translate-y-1/2 left-0 z-40">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            {/* este li mide 128px y no 160px porque los li tienen un padding puesto en index.css y este despues de ese padding recién toma el width:100%  */}
            <SocialIcon href="https://www.linkedin.com/in/yhonatan-peguero/">
              LinkedIn
              <FaLinkedin size={30} />
            </SocialIcon>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <SocialIcon href="https://github.com/YhonaPeguero">
              Github
              <FaGithub size={30} />
            </SocialIcon>
          </li>
          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a
                            href="/"
                            className="flex justify-between items-center w-full text-gray-300"
                        >
                            Email
                            <HiOutlineMail size={30} />
                        </a>
                    </li> */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <SocialIcon href={CV}>
              CV
              <BsFillPersonLinesFill size={30} />
            </SocialIcon>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
