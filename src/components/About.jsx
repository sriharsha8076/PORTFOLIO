import "./About.css";

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Who Am I</span>
                    <h2 className="section-title">About Me</h2>
                </div>
                <div className="about-content">
                    <div className="about-avatar-wrap">
                        <div className="about-avatar">
                            <span className="avatar-initials">SH</span>
                            <div className="avatar-ring"></div>
                            <div className="avatar-dots">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="avatar-dot" style={{ "--i": i }}></div>
                                ))}
                            </div>
                        </div>
                        <div className="about-badge">
                            <span>🚀</span>
                            <span>Open to Opportunities</span>
                        </div>
                    </div>

                    <div className="about-text">
                        <p>
                            Hi! I&apos;m <strong>Gundlapalli Sri Harsha Reddy</strong>, a passionate
                            Full Stack Developer and 2nd Year BTech CSE student at <strong>KL University</strong>,
                            Guntur. I maintain a current CGPA of <strong>9.67</strong> and love building
                            modern, real-world web applications.
                        </p>
                        <p>
                            I specialize in React, Vite, TailwindCSS, and have hands-on experience with
                            both MySQL and MongoDB backends. I enjoy turning complex problems into simple,
                            beautiful, and intuitive solutions.
                        </p>
                        <p>
                            When I&apos;m not coding, you&apos;ll find me exploring new tech trends,
                            solving DSA problems, or working on my next full-stack project.
                        </p>
                        <div className="about-info-grid">
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <span className="info-label">Location</span>
                                    <span className="info-value">Vijayawada, AP</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">🏫</span>
                                <div>
                                    <span className="info-label">College</span>
                                    <span className="info-value">KL University</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">🎓</span>
                                <div>
                                    <span className="info-label">Degree</span>
                                    <span className="info-value">BTech CSE — Year 2</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-icon">⭐</span>
                                <div>
                                    <span className="info-label">CGPA</span>
                                    <span className="info-value">9.67 (Current)</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-activities">
                            <h4 className="activities-label">🎭 Extracurriculars</h4>
                            <div className="activity-cards">
                                <div className="activity-card">
                                    <span className="activity-icon">⚙️</span>
                                    <div>
                                        <span className="activity-name">Technical Club</span>
                                        <span className="activity-role">Member</span>
                                    </div>
                                </div>
                                <div className="activity-card">
                                    <span className="activity-icon">📖</span>
                                    <div>
                                        <span className="activity-name">Vachas — Literature Club</span>
                                        <span className="activity-role">Member · Event Anchor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Let&apos;s Connect →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
