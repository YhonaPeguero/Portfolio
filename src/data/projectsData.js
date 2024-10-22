import AnimeApp from "../assets/anime-app.png";
import TestApiPeliculas from "../assets/test-api.png";
import PromoVisa from "../assets/promo-visa-sin-limites.jpg";
import TrackCalendar from "../assets/TrackCalendar.jpg";
import Portafolio from "../assets/Portfolio.png"
import DigitalThrive from "../assets/digital-thrive.jpg"
import TokenCalculator from "../assets/llmtokencalculator.jpg"
import GestorNotas from "../assets/gestor-de-notas.jpg"



const projects = {
    data: [

        {
            bgImg: PromoVisa,
            title: "Promo Visa [Cliente]",
            linkLive: "https://promo-visa.netlify.app/",
        },

        {
            bgImg: AnimeApp,
            title: "Anime App React",
            linkLive: "https://anime-app-ob.netlify.app/",
            linkCode: "https://github.com/fabioalcocer/anime-app",
        },

        {
            bgImg: DigitalThrive,
            title: "Landing Page [Cliente]",
            linkLive: "https://digitalthrivee.com/",
        },

        {
            bgImg: TestApiPeliculas,
            title: "Test Api Peliculas",
            linkLive: "https://test-react-developer.netlify.app/",
            linkCode: "https://github.com/YhonaPeguero/Prueba-Tecnica-React-Developer",
        },

        {
            bgImg: TokenCalculator,
            title: "Calcular Tokens de LLms",
            linkLive: "https://llmtokenscalulator.netlify.app/",
            linkCode: "https://github.com/YhonaPeguero/llms-tokens-calculator",
        },

        {
            bgImg: TrackCalendar,
            title: "Tracker de Habitos",
            linkLive: "https://tracking-goals.netlify.app/",
            linkCode: "https://github.com/YhonaPeguero/Tracking-Habits",
        },
        {
            bgImg: GestorNotas,
            title: "Gestor de Notas FullStack",
            linkLive: "https://gestion-de-notas.netlify.app/",
            linkCode: "https://github.com/YhonaPeguero/FullStack-Front-End-Integration",
        },
    ],
};

export default projects;
