export type TrainingProgram = {
    id: string;
    title: string;
    price: string;
    duration?: string;
    features: string[];
    cta: string;
    popular?: boolean;
};

export const trainingPrograms: TrainingProgram[] = [
    {
        id: "web-dev",
        title: "Web Development Training",
        price: "₦150,000",
        duration: "12 Weeks",
        features: [
            "Live Classes & Mentorship",
            "Real-world Projects",
            "HTML, CSS, JS, React, Next.js",
            "Certificate of Completion",
            "Job Search Support"
        ],
        cta: "Enroll Now",
        popular: true,
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        price: "₦80,000",
        duration: "8 Weeks",
        features: [
            "SEO & Content Strategy",
            "Social Media Marketing",
            "Google & Facebook Ads",
            "Analytics & Reporting",
            "Email Marketing"
        ],
        cta: "Start Learning",
    },
    {
        id: "mentorship",
        title: "1-on-1 Mentorship",
        price: "₦50,000",
        duration: "Monthly",
        features: [
            "Weekly 1-on-1 Calls",
            "Code Reviews",
            "Career Guidance",
            "Project Support",
            "Interview Prep"
        ],
        cta: "Book Slot",
    },
];
