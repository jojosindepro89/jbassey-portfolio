export type Project = {
    id: string;
    title: string;
    description: string;
    category: "Web Development";
    techStack: string[];
    links: {
        demo: string;
        caseStudy?: string;
    };
    image: string;
    subCategory?: "Web App" | "Landing Page" | "E-commerce";
};

export const projects: Project[] = [
    // Web Development Projects
    {
        id: "web-1",
        title: "cmhsports",
        description: "Bet prediction site with premium sports news.",
        category: "Web Development",
        subCategory: "Web App",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
        links: { demo: "https://www.cmhsports.site/" },
        image: "/images/cmhsports.png",
    },
    {
        id: "web-2",
        title: "Anchor",
        description: "B2B SaaS platform for financial operations and billing.",
        category: "Web Development",
        subCategory: "Web App",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        links: { demo: "https://getanchor.co/" },
        image: "/images/anchor.png",
    },
    {
        id: "web-3",
        title: "Groom",
        description: "Styling and grooming service platform.",
        category: "Web Development",
        subCategory: "Web App",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        links: { demo: "https://www.usegroom.com/#how-it-works" },
        image: "/images/groom.png",
    },
    {
        id: "web-4",
        title: "Clover Dynamics",
        description: "Software development agency website.",
        category: "Web Development",
        subCategory: "Landing Page",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        links: { demo: "https://www.cloverdynamics.com/" },
        image: "/images/clover.png",
    },
    {
        id: "web-5",
        title: "1403 Luxury",
        description: "Luxury fashion e-commerce store.",
        category: "Web Development",
        subCategory: "E-commerce",
        techStack: ["WordPress", "WooCommerce", "PHP"],
        links: { demo: "https://www.1403luxury.com/" },
        image: "/images/1403luxury.png",
    },
    {
        id: "web-6",
        title: "Trybze",
        description: "Restaurant and food ordering website.",
        category: "Web Development",
        subCategory: "Web App",
        techStack: ["WordPress", "PHP", "CSS"],
        links: { demo: "https://trybze.com/" },
        image: "/images/trybze.png",
    },
    {
        id: "web-7",
        title: "Guchys Vision",
        description: "Clear Vision Starts Here. Comprehensive eye care services.",
        category: "Web Development",
        subCategory: "Web App",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        links: { demo: "https://www.guchysvision.com/" },
        image: "/images/guchysvision.png",
    },
    {
        id: "web-8",
        title: "Real Davis Group",
        description: "Powering the Next Generation of Digital Systems.",
        category: "Web Development",
        subCategory: "Landing Page",
        techStack: ["React", "TypeScript", "Tailwind CSS"],
        links: { demo: "https://realdavisgroup.com/" },
        image: "/images/realdavisgroup.png",
    },
];
