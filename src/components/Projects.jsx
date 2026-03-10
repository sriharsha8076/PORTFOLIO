import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "Student Achievement Management System",
        description:
            "A comprehensive web platform engineered to track, manage, and showcase student extracurricular accomplishments. Implements role-based dashboards (Admin & Student) to streamline the recording of awards, participation metrics, and generate detailed performance reports.",
        tags: ["React", "Vite", "TailwindCSS", "JavaScript", "MySQL"],
        icon: "🏆",
        color: "#7c3aed",
        gradient: "linear-gradient(135deg, #7c3aed22, #2563eb22)",
        liveUrl: "https://fsad-project-sibo.vercel.app/",
        githubUrl: "https://github.com/sriharsha8076",
    },
    {
        id: 2,
        title: "Full-Stack Learning Management System",
        description:
            "A robust Learning Management System (LMS) portal architected for end-to-end educational delivery. Features include dynamic course content management, secure user authentication, and responsive interfaces to ensure an optimal learning experience for students.",
        tags: ["React", "Vite", "TailwindCSS", "JavaScript", "MongoDB"],
        icon: "🎓",
        color: "#0891b2",
        gradient: "linear-gradient(135deg, #0891b222, #05966922)",
        liveUrl: "https://projectendsem-a1b2.vercel.app/",
        githubUrl: "https://github.com/sriharsha8076",
    },
];

const ProjectCard = ({ project }) => (
    <div className="project-card" style={{ "--card-color": project.color }}>
        <div className="project-card-bg" style={{ background: project.gradient }}></div>
        <div className="project-icon" style={{ background: project.gradient, border: `1px solid ${project.color}44` }}>
            <span>{project.icon}</span>
        </div>
        <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="project-tag" style={{ borderColor: `${project.color}55`, color: project.color }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="project-links">
            <a href={project.githubUrl} className="project-link" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Code
            </a>
            <a href={project.liveUrl} className="project-link project-link-primary" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
            </a>
        </div>
    </div>
);

const Projects = () => (
    <section id="projects" className="projects section">
        <div className="container">
            <div className="section-header">
                <span className="section-tag">My Work</span>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    A selection of projects I&apos;ve built with passion and precision.
                </p>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
