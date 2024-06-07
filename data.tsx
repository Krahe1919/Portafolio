import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { FaReact, FaLaravel  } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiSpring } from "react-icons/si";



export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
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
        link: "/testimonials",
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
        description: "10%",
    },
    {
        icon: <SiSpring  />,
        title: "SPRING BOOT",
        description: "5%",
    },
    {
        icon: <DiPostgresql />,
        title: "POSTGRESQL",
        description: "5%",
    },
    {
        icon: <GrMysql />,
        title: "MYSQL",
        description: "5%",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];