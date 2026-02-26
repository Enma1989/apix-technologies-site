import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

export function Section({ children, className = "", id, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative section-padding ${dark ? "bg-premium-dark text-white" : "bg-premium-white text-dark"} ${className}`}
        >
            <div className="container-premium">
                {children}
            </div>
        </section>
    );
}

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`container-premium ${className}`}>
            {children}
        </div>
    );
}
