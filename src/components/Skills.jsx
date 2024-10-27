import React from "react";
import { motion } from "framer-motion";
import ScrollSection from './ScrollSection';

const skillsData = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

const SkillCard = ({ name, icon }) => (
  <motion.div
    className="bg-[#1f2937] p-6 rounded-lg shadow-lg transition-all duration-300 will-change-transform"
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
    // Reducir complejidad de animaciones
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <motion.img 
      className="w-20 h-20 mx-auto mb-4"
      src={icon} 
      alt={`${name} icon`}
      whileHover={{ 
        rotate: 360,
        transition: { duration: 0.6, ease: "easeInOut" }
      }}
    />
    <p className="text-lg font-semibold text-gray-300">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <ScrollSection name="skills" className="bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.6,
            staggerChildren: 0.1
          }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Habilidades
          </p>
          <p className="py-4">Estas son las tecnologías con las que he trabajado:</p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard name={skill.name} icon={skill.icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ScrollSection>
  );
};

export default Skills;
