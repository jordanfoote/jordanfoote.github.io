import { useRef, useEffect, useState } from "react";
import javaLogo from "../assets/logos/Java.png";
import springLogo from "../assets/logos/SpringBoot.png";
import reactLogo from "../assets/logos/React.png";
import nextLogo from "../assets/logos/Next.png";
import nodeLogo from "../assets/logos/Node.png";
import jsLogo from "../assets/logos/JavaScript.png";
import sqlLogo from "../assets/logos/SQL.png";
import htmlLogo from "../assets/logos/HTML5.png";
import cssLogo from "../assets/logos/CSS3.png";
import gitLogo from "../assets/logos/Git.png";
import bootstrapLogo from "../assets/logos/Bootstrap.png";
import "./LogoCarousel.css";

export default function LogoCarousel() {
    const logos = [
        { img: javaLogo, name: "Java" },
        { img: springLogo, name: "Spring Boot" },
        { img: reactLogo, name: "React" },
        { img: nextLogo, name: "Next.js" },
        { img: nodeLogo, name: "Node.js" },
        { img: jsLogo, name: "JavaScript" },
        { img: sqlLogo, name: "SQL" },
        { img: htmlLogo, name: "HTML5" },
        { img: cssLogo, name: "CSS3" },
        { img: bootstrapLogo, name: "Bootstrap" },
        { img: gitLogo, name: "Git" },
    ];

    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle horizontal scrolling with vertical wheel and increase speed
    useEffect(() => {
        const carousel = carouselRef.current;

        const handleWheel = (e) => {
            e.preventDefault();
            // Multiply deltaY to make scrolling faster
            carousel.scrollLeft += e.deltaY * 1.5;
        };

        carousel.addEventListener("wheel", handleWheel, { passive: false });
        return () => carousel.removeEventListener("wheel", handleWheel);
    }, []);

    // Update active logo dynamically
    const handleScroll = () => {
        const container = carouselRef.current;
        const children = Array.from(container.querySelectorAll(".carousel-item"));
        const center = container.scrollLeft + container.offsetWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        children.forEach((child, i) => {
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const distance = Math.abs(center - childCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        });

        setActiveIndex(closestIndex);
    };

    // Attach scroll listener
    useEffect(() => {
        const container = carouselRef.current;

        // initial detection after layout
        requestAnimationFrame(() => handleScroll());

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container" ref={carouselRef}>
                <div className="carousel">
                    {logos.map((logo, i) => (
                        <div
                            key={i}
                            className={`carousel-item ${i === activeIndex ? "active" : ""}`}
                        >
                            <img src={logo.img} alt={logo.name} />
                            <span className="logo-name">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
