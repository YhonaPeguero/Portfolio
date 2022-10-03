import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import CV from "../assets/Yhonatan Peguero-CV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    /* este px es padding hacia los lados, derecha e izquierda */
    <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "75px" }} />
      </div>
      {/* Menu */}
      {/* @media screen and min-width(768px) {display:flex} === md:flex */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          {/* <li>About</li> */}
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Habilidades
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contáctame
            </Link>
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
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            offset={-70}
            smooth={true}
            duration={500}
          >
            Habilidades
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            offset={-70}
            to="work"
            smooth={true}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            offset={-70}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contáctame
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      {/* Al ser fixed pierde su espacio en el navegador, como si tuviera un position absolute. Por eso lo posiciona con top.*/}
      {/* @media (min-width: 1024px) === lg */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {/* duration-300	transition-duration: 300ms; */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            {/* este li mide 128px y no 160px porque los li tienen un padding puesto en index.css y este despues de ese padding recién toma el width:100%  */}
            <a
              href="https://www.linkedin.com/in/yhonatan-peguero/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
            <a
              href="https://github.com/YhonaPeguero"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github
              <FaGithub size={30} />
            </a>
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
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              CV
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
