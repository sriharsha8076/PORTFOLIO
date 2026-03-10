import "./Hero.css";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg-grid"></div>
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>
            <div className="hero-content">
                <p className="hero-greeting">👋 Hello, I&apos;m</p>
                <h1 className="hero-name">Sri Harsha Reddy</h1>
                <h2 className="hero-title">
                    <span className="hero-title-text">BTech CSE Student &amp; Full Stack Developer</span>
                </h2>
                <p className="hero-description">
                    2nd Year BTech CSE student at <strong>KL University</strong> with a <strong>9.67 CGPA</strong>.
                    I build full-stack web apps using React, Vite, TailwindCSS and love turning ideas into
                    real-world products.
                </p>
                <div className="hero-buttons">
                    <a
                        onClick={() =>
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="btn btn-primary"
                    >
                        View My Work
                    </a>
                    <a
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="btn btn-outline"
                    >
                        Get In Touch
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">9.67</span>
                        <span className="stat-label">CGPA</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">2</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <span className="stat-number">2nd</span>
                        <span className="stat-label">Year BTech</span>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-hint">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
