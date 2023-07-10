
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full  h-screen bg-[#0a192f]">
      {/* Container */}
      {/* el mx-auto es como un margin 0 auto */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">

        <p className="text-pink-600">Hola, mi nombre es</p>
        {/* @media (min-width: 640px) === sm  */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Yhonatan Peguero
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <u>Front-End Developer.</u>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        Ingeniero de software especializado en el desarrollado web con excelente conocimiento de las tecnologías, herramientas y metodologías ágiles para el desarrollo de software.
        </p>
        
        <div>
 

          <Link to="work" offset={-70} smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Proyectos{" "}

              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
