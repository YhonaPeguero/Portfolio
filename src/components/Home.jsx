import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaReact } from "react-icons/fa"; // Importamos íconos adicionales

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] relative overflow-hidden">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] opacity-50" />

      {/* Contenido principal */}
      <div className="relative max-w-[1000px] mx-auto px-8 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda - Texto */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-pink-600 text-xl font-medium mb-2">
                Hola, mi nombre es
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] leading-tight mb-2">
                Yhonatan
                Peguero
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-[#8892b0] mb-6 underline">
                Software Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#8892b0] text-lg max-w-[600px] mb-8 leading-relaxed"
            >
              Me especializo en el desarrollo de aplicaciones web modernas y escalables.
              Con experiencia en frontend y backend, creo soluciones innovadoras
              que combinan diseño atractivo con código eficiente.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4"
            >
              <Link to="work" smooth={true} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-pink-700 transition-colors group"
                >
                  Ver Proyectos
                  <motion.span 
                    className="group-hover:rotate-90 duration-300"
                  >
                    <HiArrowNarrowRight className="ml-2" />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Tecnologías destacadas */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12"
            >
              <p className="text-[#8892b0] text-sm mb-4">TECNOLOGÍAS PRINCIPALES</p>
              <div className="flex gap-6">
                <motion.div whileHover={{ scale: 1.1 }} className="text-4xl text-[#ccd6f6]">
                  <FaReact />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="text-4xl text-[#ccd6f6]">
                  <FaCode />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="text-4xl text-[#ccd6f6]">
                  <FaDatabase />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center items-center relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-xl"
              />
              <motion.img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="React Logo"
                className="w-48 h-48 relative z-10"
                animate={{
                  y: [-10, 10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
