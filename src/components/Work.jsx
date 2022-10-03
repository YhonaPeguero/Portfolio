import React from "react";
import AnimeApp from "../assets/anime-app.png";
import Trainee from "../assets/trainee-community.png";
import Crud from "../assets/crud-vue3.png";
import Encriptador from "../assets/encriptador.png";
import Reloj from "../assets/reloj.png";
import Portfolio from "../assets/Portfolio.png";

const Work = () => {
    return (
        <div
            name="work"
            /* le quito el md:h-screen */
            className="w-full text-gray-300 bg-[#0a192f]"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        Proyectos
                    </p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                   
                    <div
                        style={{ backgroundImage: `url(${Trainee})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Trainee Community
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://traineecommunity.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/YhonaPeguero/Landing-Trainee-Community"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${AnimeApp})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Anime App
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://anime-app-ob.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/fabioalcocer/anime-app"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div
                        style={{
                            backgroundImage: `url(${Crud})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Crud con Vue3
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://yhonapeguero.github.io/crud-vue/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/YhonaPeguero/crud-vue"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${Encriptador})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Encriptador de texto
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://yhonapeguero.github.io/Alura-Challenge-One/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/YhonaPeguero/Alura-Challenge-One"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${Reloj})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Reloj Digital
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="https://basic-project-reloj-digital.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/YhonaPeguero/basic-project-reloj-digital"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${Portfolio})`,
                        }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Portfolio Yhonatan
                            </span>
                            <div className="pt-8 text-center">
                                <a
                                    href="/portfolio"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a
                                    href="https://github.com/Leandro-Marcelo/portfolio"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
