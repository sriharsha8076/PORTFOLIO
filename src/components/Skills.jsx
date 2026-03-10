import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const programmingLangs = [
    { name: "Java", level: 75, icon: "☕", color: "#f89820" },
    { name: "Python", level: 80, icon: "🐍", color: "#3572A5" },
    { name: "C/C++", level: 85, icon: "⚙️", color: "#a8b9cc", badge: "Preferred" },
];

const webSkills = [
    { name: "HTML", level: 90, icon: "🌐", color: "#e34c26" },
    { name: "CSS", level: 85, icon: "🎨", color: "#264de4" },
    { name: "JavaScript", level: 82, icon: "⚡", color: "#f0db4f" },
    { name: "React.js", level: 75, icon: "⚛️", color: "#61dafb" },
    { name: "REST APIs", level: 78, icon: "🔗", color: "#10b981" },
];

const dsaSkills = [
    "Arrays", "Linked Lists", "Trees", "Graphs",
    "Dynamic Programming", "Greedy Algorithms",
];

const cloudSkills = [
    "Cloud Computing", "AWS Basics", "Virtual Machines", "Containers",
];

const aimlSkills = [
    "Machine Learning", "Neural Networks", "Deep Learning", "Data Preprocessing",
];

const dataSkills = [
    "Python", "Pandas", "NumPy", "Data Visualization",
];

const otherTools = [
    "Git", "GitHub", "VS Code",
];

const concepts = [
    "OOP", "Operating Systems", "Computer Architecture", "Database Fundamentals",
];

const SkillBar = ({ skill, animate }) => (
    <div className="skill-bar-item">
        <div className="skill-bar-header">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">
                {skill.name}
                {skill.badge && <span className="skill-badge">{skill.badge}</span>}
            </span>
            <span className="skill-level">{skill.level}%</span>
        </div>
        <div className="skill-bar-track">
            <div
                className="skill-bar-fill"
                style={{
                    width: animate ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                    boxShadow: animate ? `0 0 12px ${skill.color}66` : "none",
                }}
            ></div>
        </div>
    </div>
);

const Skills = () => {
    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills section" ref={ref}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What I Know</span>
                    <h2 className="section-title">My Skills</h2>
                </div>
                <div className="skills-content">
                    <div className="skills-bars">
                        <h3 className="skills-subtitle">Programming Languages</h3>
                        {programmingLangs.map((skill) => (
                            <SkillBar key={skill.name} skill={skill} animate={animate} />
                        ))}
                        <h3 className="skills-subtitle" style={{ marginTop: "2rem" }}>Web Development</h3>
                        {webSkills.map((skill) => (
                            <SkillBar key={skill.name} skill={skill} animate={animate} />
                        ))}
                    </div>
                    <div className="skills-tools">
                        <h3 className="skills-subtitle">Data Structures &amp; Algorithms</h3>
                        <div className="tools-grid">
                            {dsaSkills.map((item) => (
                                <div key={item} className="tool-chip chip-dsa">{item}</div>
                            ))}
                        </div>

                        <h3 className="skills-subtitle" style={{ marginTop: "1.5rem" }}>Cloud &amp; DevOps</h3>
                        <div className="tools-grid">
                            {cloudSkills.map((item) => (
                                <div key={item} className="tool-chip chip-cloud">{item}</div>
                            ))}
                        </div>

                        <h3 className="skills-subtitle" style={{ marginTop: "1.5rem" }}>AI / ML</h3>
                        <div className="tools-grid">
                            {aimlSkills.map((item) => (
                                <div key={item} className="tool-chip chip-ai">{item}</div>
                            ))}
                        </div>

                        <h3 className="skills-subtitle" style={{ marginTop: "1.5rem" }}>Data Analytics</h3>
                        <div className="tools-grid">
                            {dataSkills.map((item) => (
                                <div key={item} className="tool-chip chip-data">{item}</div>
                            ))}
                        </div>

                        <h3 className="skills-subtitle" style={{ marginTop: "1.5rem" }}>Tools</h3>
                        <div className="tools-grid">
                            {otherTools.map((tool) => (
                                <div key={tool} className="tool-chip">{tool}</div>
                            ))}
                        </div>

                        <h3 className="skills-subtitle" style={{ marginTop: "1.5rem" }}>Concepts</h3>
                        <div className="tools-grid">
                            {concepts.map((item) => (
                                <div key={item} className="tool-chip chip-concepts">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
