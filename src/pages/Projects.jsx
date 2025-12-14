import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: 'James Paxton Mortgage',
            description: 'A full-stack lead management portal using React.js and EmailJS for automated submissions.',
            link: '#'
        },
        {
            title: 'SwiftTrim Lawn Care',
            description: 'This portfolio site built with React and Vite to showcase projects and skills.',
            link: '#'
        },
        {
            title: 'REST Blog',
            description: 'A productivity app built with React and Node.js, including CRUD functionality and user authentication.',
            link: '#'
        },
        {
            title: 'MAQI RATI Artist Webiste',
            description: 'A weather forecast web app consuming a public API with live updates.',
            link: '#'
        }
        ,
        {
            title: 'User Management System',
            description: 'A weather forecast web app consuming a public API with live updates.',
            link: '#'
        }
        ,
        {
            title: 'Shopping Cart',
            description: 'A weather forecast web app consuming a public API with live updates.',
            link: '#'
        }
        ,
        {
            title: 'Weather Map',
            description: 'A weather forecast web app consuming a public API with live updates.',
            link: '#'
        }
        ,
        {
            title: 'Movies-API',
            description: 'A weather forecast web app consuming a public API with live updates.',
            link: '#'
        }
    ];

    return (
        <div>
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
            </div>
        </div>
    );
}
