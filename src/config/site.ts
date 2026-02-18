export const siteConfig = {
    name: "Joseph Bassey",
    description: "Full-Stack Web Developer • Growth Marketer • Tech Educator",
    url: "https://josephbassey.com",
    ogImage: "https://josephbassey.com/og.jpg",
    links: {
        twitter: "https://twitter.com/josephbassey",
        github: "https://github.com/josephbassey",
        linkedin: "https://linkedin.com/in/josephbassey",
    },
    navItems: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Training", href: "#training" },
        { name: "Contact", href: "#contact" },
    ],
    contact: {
        email: "jbassey96@gmail.com",
        phone: "+2349078064598",
    },
};

export type SiteConfig = typeof siteConfig;
