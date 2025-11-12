import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+4 años de experiencia",
    },
    // {
    //     id: 2,
    //     name: "Clientes",
    //     icon: <UsersRound />,
    //     description: "+200 clientes satisfechos",
    // },
    {
        id: 2,
        name: "Proyectos profecionales",
        icon: <Wrench />,
        description: "3 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
  {
    id: 1,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    url: "/Tailwind_CSS_Logo.png",
  },
  {
    id: 5,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 6,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    id: 7,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: 8,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    id: 9,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    id: 10,
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    id: 11,
    url: "/filament.webp",
  },
  {
    id: 12,
    url: "/MongoDB_Logo.png",
  },
];



export const dataPortfolio = [
  {
    id: 1,
    title: "Plataforma eCommerce Multitenant",
    image: "/ecommerce.png",
    urlGithub: "#!", // proyecto privado
    urlDemo: "https://gesyco.co/",
    role: "Sistema eCommerce multitena desde una API central. Administraba ventas, inventario, notas contables, facturación electrónica, envío de correos, seguimiento de compras, activación de plugins y gestión de suscripciones.",
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "jQuery",
      "HTML",
      "CSS",
      "AJAX",
      "JavaScript",
      "Livewire",
      "Laravel HTTP Client",
    ],
  },
  {
    id: 2,
    title: "Sistema POS Multitenant",
    image: "/posmultitenant.png", // reemplaza con tu imagen de POS
    urlGithub: "#!", // proyecto privado
    urlDemo: "https://gesyco.co/pos",
    role: "Sistema de punto de venta multitena integrado con la API central. Manejo de ventas, cobros, devoluciones, control de inventario y facturación electrónica en tiempo real.",
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "jQuery",
      "HTML",
      "CSS",
      "AJAX",
      "JavaScript",
      "Livewire",
      "Laravel HTTP Client"
    ],
  },
  {
    id: 3,
    title: "Dashboard Administrativo",
    image: "/adminmultitenant.png",
    urlGithub: "#!",
    urlDemo: "https://gesyco.co/",
    role: "Panel de control para la administración de múltiples tiendas, reportes de ventas, inventario y estadísticas en tiempo real.",
    technologies: [
      "Laravel",
      "PHP",
      "Blade",
      "jQuery",
      "HTML",
      "CSS",
      "AJAX",
      "JavaScript",
      "Voyager",
      "Livewire",
      "Laravel HTTP Client"
    ],
  },
];





export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Basic",
                value: 30,
            },
            {
                name: "Next.js",
                subtitle: "Basic",
                value: 30,
            },
            {
                name: "Angular",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Bootstrap",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "Livewire",
                subtitle: "Experimentado",
                value: 80,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Laravel",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "Filament",
                subtitle: "Experimentado",
                value: 70,
            },
            {
                name: "MySQL",
                subtitle: "Experimentado",
                value: 60,
            },
            {
                name: "Mongo DB",
                subtitle: "Basic",
                value: 45,
            },
            {
                name: "PHP",
                subtitle: "Experimentado",
                value: 60,
            }
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    // {
    //     id: 2,
    //     title: "Creación de contenido",
    //     icon: <BellPlus />,
    //     features: [
    //         {
    //             name: "Redacción de contenido original y de calidad",
    //         },
    //         {
    //             name: "Creación de vídeos atractivos y dinámicos",
    //         },
    //         {
    //             name: "Diseño gráfico para una imagen impactante",
    //         },
    //         {
    //             name: "Edición profesional de textos y materiales visuales",
    //         },
    //         {
    //             name: "Estrategias de marketing de contenidos efectivas",
    //         },
    //         {
    //             name: "Producción de podcasts informativos y entretenidos",
    //         },
    //         {
    //             name: "Generación de infografías claras y visualmente atractivas",
    //         },
    //         {
    //             name: "Fotografía profesional para capturar momentos excepcionales",
    //         },
    //     ],
    // },
    {
        id: 2,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+57 312 494 12 71",
        link: "tel:+57 312 494 12 71",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/franklinlondono",
        link: "github.com/franklinlondono",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "fdlondono16@gmail.com",
        link: "mailto:fdlondono16@gmail.com",
        icon: <Inbox />,
    },
];

export const dataCourses = [
  {
    id: 1,
    name: "Diplomado en Desarrollo Web Full Stack",
    institution: "Universidad Iberoamericana",
    description: "Desarrollar aplicaciones Backend con NodeJS, JavaScript, ExpressJS. Crear Páginas y sitios web (frontend) utilizando HTML5 CSS3 JavaScript, y Angular.",
    imageUrl: "/Logo_IBERO.png",
    status: "Finalizado",
  },
  {
    id: 2,
    name: "Tecnólogo en Sistemas",
    institution: "Sena",
    description: "Mantenimiento de equipos de computo, Diseño e instalacion de cableado estructurado.",
    imageUrl: "/Sena_Colombia_logo.png",
    status: "Finalizado",
  },
  {
    id: 3,
    name: "Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress +",
    institution: "Udemy",
    description: "Aprende PHP desde cero, bases de datos, SQL, MySQL, POO, MVC, Laravel 12, Symfony 7, WordPress y más.",
    imageUrl: "/logo-udemy.png",
    status: "Finalizado",
  },
  {
    id: 4,
    name: "Actualización Angular",
    institution: "Udemy",
    description: "Domina Angular y crea aplicaciones web del mundo real con TypeScript, Firebase, Firestore, JWT y más.",
    imageUrl: "/logo-udemy.png",
    status: "En curso",
  },
];
