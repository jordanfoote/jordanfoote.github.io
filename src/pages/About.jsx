import { useState } from "react";
import "./About.css";
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

export default function About() {
    const [selectedExp, setSelectedExp] = useState(null); // tracks which card is open


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


    const experiences = [
        {
            company: "James Paxton Mortgage",
            role: "IT Specialist - Contract",
            location: "Tulsa, OK",
            dates: "Aug 2025 – Present",
            responsibilities: [
                "Managed network and computer systems aboard a submarine.",
                "Ensured system security and uptime in mission-critical environments.",
                "Trained junior personnel on IT systems and procedures.",
            ],
            description: [
                "Designed and deployed a Next.js company website with Static Site Generation (SSG) for performance and SEO optimization.",
                "Built lead generation forms with integrated CRM and email automation for client management and pipeline tracking.",
                "Developed a Spring Boot REST API with PostgreSQL backend and Firebase Cloud Storage for dynamic blog management.",
                "Administered Google Workspace and handled online marketing, analytics, and SEO strategy to increase web traffic and conversion rates.",
                "Configured GCP hosting with domain routing, SSL, and continuous deployment pipelines for production stability.",
            ],
        },
        {
            company: "Macy's Technology",
            role: "Software Support Engineer II",
            location: "Johns Creek, GA",
            dates: "Jan 2023 – Present",
            responsibilities: [
                "Provided L2 software support for retail technology systems.",
                "Managed troubleshooting for in-store and remote systems.",
                "Collaborated with cross-functional teams to resolve escalations.",
            ],
            description: [
                "Supported enterprise Java applications and Android-based store operations tools (RFID, inventory, fulfillment) used across 600+ retail locations, ensuring smooth day-to-day operations for thousands of store employees.",
                "Delivered Level II production support across distributed systems, proactively monitoring application health and resolving incidents—helping maintain 99%+ uptime for critical retail applications.",
                "Troubleshoot and support backend Spring Boot microservices (Maven/Gradle), improving reliability of markdown, order fulfillment, and data sync workflows across millions of daily transactions.",
                "Developed and executed SQL scripts to analyze data discrepancies, validate business logic, and generate ad-hoc reporting — reducing investigation time by 30% for recurring issue types.",
                "Improved monitoring visibility by fine-tuning alerting dashboards, optimizing alert thresholds, and updating metric panels, resulting in 40% faster incident detection.",
                "Collaborated in Agile delivery cycles, performing root-cause analysis, creating knowledge base documentation, and partnering with Product, QA, and Infrastructure teams to reduce repeat incidents by 20%.",
                "Utilized GitLab CI/CD pipelines for code reviews, deployments, and automation, contributing updates to shared environments and configuration repositories.",
                "Maintained working knowledge of Google Cloud Platform (GCP) services and configurations for cloud-hosted enterprise systems, including Pub/Sub, Compute Engine, and Cloud SQL.",
            ],
        },
        {
            company: "US Navy",
            role: "Information Systems Technician (Submarines)",
            location: "Groton, CT",
            dates: "Sep 2014 – Apr 2017",
            responsibilities: [
                "Managed network and computer systems aboard a submarine.",
                "Ensured system security and uptime in mission-critical environments.",
                "Trained junior personnel on IT systems and procedures.",
            ],
            description: [
                "Administered and secured classified and unclassified networks aboard U.S. Navy submarines, managing Active Directory, Exchange Server, Group.",
                "Policy, and Cisco network infrastructure for a crew of 150+ personnel.",
                "Performed system administration, patching, and configuration management on mission-critical communication, navigation, and intelligence systems, maintaining 100% operational readiness during deployments.",
                "Diagnosed and resolved complex network, hardware, and software issues in a high-security, resource-constrained environment, reducing system downtime by 35% through proactive monitoring and maintenance.",
                "Executed user account management, access control enforcement, and audit compliance across multiple classified enclaves, ensuring adherence to DoD cybersecurity protocols and STIG requirements.",
                "Managed data integrity, backup operations, and disaster recovery procedures, safeguarding sensitive information during missions and ensuring quick restoration during system faults.",
                "Collaborated with a small, cross-functional IT team, providing 24/7 support and coordinating with command leadership to prioritize system availability during time-sensitive operations.",
            ],
        },
        // Add more experiences here
    ];

    return (
        <div className="about">
            <h1>About Me</h1>

            <h2>Skills</h2>
            <div className="logo-grid">
                {logos.map((logo, i) => (
                    <div key={i} className="logo-item">
                        <img src={logo.img} alt={logo.name} />
                        <span className="logo-name">{logo.name}</span>
                    </div>
                ))}
            </div>

            <h2>Experience</h2>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="experience-card"
                        onClick={() => setSelectedExp(exp)}
                    >
                        <h3>{exp.company} | {exp.role}</h3>
                        <p className="location-dates">{exp.location} | {exp.dates}</p>
                        <ul>
                            {exp.responsibilities.map((item, i) => ( // show first 2 items only
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <p className="more-text">Click for more details...</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedExp && (
                <div className="modal-overlay" onClick={() => setSelectedExp(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedExp.company}</h2>
                        <h3>{selectedExp.role}</h3>
                        <p className="location-dates">{selectedExp.location} | {selectedExp.dates}</p>
                        <ul>
                            {selectedExp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <button className="close-btn" onClick={() => setSelectedExp(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
