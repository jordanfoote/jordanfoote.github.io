import LogoCarousel from "../components/LogoCarousel";
import "./About.css";

export default function About() {
    const experiences = [
        {
            company: "James Paxton Mortgage",
            role: "IT Specialist - Contract",
            location: "Various Locations",
            dates: "2016 – 2022",
            responsibilities: [
                "Managed network and computer systems aboard a submarine.",
                "Ensured system security and uptime in mission-critical environments.",
                "Trained junior personnel on IT systems and procedures.",
            ],
        },
        {
            company: "Macy's Technology",
            role: "Software Support Engineer II",
            location: "Johns Creek, GA",
            dates: "2023 – Present",
            responsibilities: [
                "Provided L2 software support for retail technology systems.",
                "Managed troubleshooting for in-store and remote systems.",
                "Collaborated with cross-functional teams to resolve escalations.",
            ],
        },
        {
            company: "US Navy",
            role: "Information Systems Technician (Submarines)",
            location: "Various Locations",
            dates: "2016 – 2022",
            responsibilities: [
                "Managed network and computer systems aboard a submarine.",
                "Ensured system security and uptime in mission-critical environments.",
                "Trained junior personnel on IT systems and procedures.",
            ],
        },
        // Add more experiences here
    ];

    return (
        <div className="about">
            <h1>About Me</h1>

            <h2>Skills</h2>
            <LogoCarousel />

            <h2>Experience</h2>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <h3>{exp.company} | {exp.role}</h3>
                        <p className="location-dates">{exp.location} | {exp.dates}</p>
                        <ul>
                            {exp.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
