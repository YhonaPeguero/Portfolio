import React from "react";

// DATA
import projectsData from "../data/projectsData";
import ProjectContainer from "./ProjectContainer";

const Work = () => {
    return (
        <div name="work" className="w-full text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Proyectos
                    </p>
                </div>
                <ProjectContainer data={projectsData.data} />
            </div>
        </div>
    );
};

export default Work;
