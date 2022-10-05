import React from "react";

const Contact = () => {
    return (
        <div
            name="contact"
            /* le quito el h-screen y le paso de p-4 a p-8 */
            className="w-full bg-[#0a192f] flex justify-center items-center p-8 mt-10"
        >
            <form
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                        Contáctame
                    </p>
                    <p className="text-gray-300 py-4">
                    ¡Espero que podamos hablar pronto! enviame un mensaje para charlar sobre tu proyecto.
                    </p>
                </div>
                <input type="hidden" name="form-name" value="contact"
                    className="bg-[#ccd6f6] p-2"
                    placeholder="Nombre"
                />
                <input
                    className="my-4 p-2 bg-[#ccd6f6]"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#ccd6f6] p-2"
                    name="message"
                    rows="10"
                    placeholder="Mensaje"
                ></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default Contact;
