import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string
    children: React.ReactNode
    className?: string
    background?: "default" | "secondary" | "none"
}

export function Section({
    id,
    children,
    className,
    background = "default",
    ...props
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                background === "secondary" && "bg-zinc-950",
                className
            )}
            {...props}
        >
            <div className="container px-4 md:px-6 mx-auto">
                {children}
            </div>
        </section>
    )
}
