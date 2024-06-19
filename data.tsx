import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Speech } from "lucide-react";
import { FaReact, FaLaravel, FaGithub, FaWhatsapp    } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiSpring } from "react-icons/si";



export const socialNetworks = [
    {
        id: 1,
        logo: <FaGithub size={30} strokeWidth={1} />,
        src: "https://github.com/Krahe1919",
    },
    {
        id: 2,
        logo: <FaWhatsapp size={30} strokeWidth={1} />,
        src: "https://wa.me/573227222411",
    },
    {
        id: 3,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/harol-moreno-557180254/",
    },
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={35} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={35} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={35} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={35} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={35} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Comienzo de etapa lectiva en",
        subtitle: "Analisis y desarrollo de software",
        description: "Mis primeros pasos y estudio con arquitecturas lenguajes de programacion, conocimiento de metodologias de desarrollo y estrucuturas de desarrollo",
        date: "julio 2022 ",
    },
    {
        id: 2,
        title: "Proyecto de formacion",
        subtitle: "Landig Page Pasteleria",
        description: "Desarrollo de una landind page sencilla para una pasteleria con conexion a base de datos MySql",
        date: "julio 2023",
    },
    {
        id: 3,
        title: "Practicas Laborales",
        subtitle: "Mi primer experencia laboral",
        description: "Comienzo de mis practicas laborales sedido a la fabrica de software del centro de servicios finacieros donde trabaje un caso de estudio de bolsa de empleo en un equipo de trabajo con metodologia scrum, y tecnologias como react.vite y php Laravel.",
        date: "enero 2024",
    },
    {
        id: 4,
        title: "Proyeccion de practicas Laborales completadas",
        subtitle: "Proyeccion en el desarrollo.",
        description: "En un lapso de 6 meses trabaje en la estructuracion y creacion de dasboard para inventarios slider y landing page con react.vite y Next.js con un poco de Laravel y Spring boot, actualmente me encuentro en estudio y creacion de varios proyectos para demostrar mis conocimientos en tecnologias de front y back ",
        date: "junio 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: " Años de etapa lectiva",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 6,
        text: "Meses de experiencia Laboral",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 4,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Tecnologias Manejadas",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <FaReact />,
        title: "REACT",
        description: "75%",
    },  
    {
        icon: <FaLaravel />,
        title: "LARAVEL",
        description: "50%",
    },
    {
        icon: <SiSpring  />,
        title: "SPRING BOOT",
        description: "20%",
    },
    {
        icon: <DiPostgresql />,
        title: "POSTGRESQL",
        description: "10%",
    },
    {
        icon: <GrMysql />,
        title: "MYSQL",
        description: "10%",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Slider",
        image: "/1.png",
        urlGithub: "https://github.com/Krahe1919/Slider",
        urlDemo: "https://gorgeous-flan-7c2ec3.netlify.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/2.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
];

export const dataSkills = [
    {
        id: 1,
        name: "Trabajo En Equipo",
        imageUrl: "/equipo.png",
    },
    {
        id: 2,
        name: "Disciplina",
        imageUrl: "/disciplina.png",
    },
    {
        id: 3,
        name: "Auto Aprendizaje",
        imageUrl: "/auto-aprendizaje.png",
    },
    {
        id: 4,
        name: "Adaptabilidad",
        imageUrl: "/adaptabilidad.png",
    },
    {
        id: 5,
        name: "Perseverancia",
        imageUrl: "/perseverancia.png",
    },
    {
        id: 6,
        name: "Escucha Activa",
        imageUrl: "/escucha.png",
    },
];