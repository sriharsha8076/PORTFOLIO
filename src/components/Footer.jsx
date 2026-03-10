import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="footer-logo">&lt;Harsha /&gt;</span>
                        <p>Building digital experiences that make a difference.</p>
                    </div>
                    <div className="footer-nav">
                        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                            <a
                                key={item}
                                onClick={() =>
                                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="footer-link"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/sriharsha8076" className="social-btn" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/gundlapallisriharshareddy/" className="social-btn" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="mailto:2400031017cse1@gmail.com" className="social-btn" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                        <a href="https://www.codechef.com/users/kl2400031017" className="social-btn" target="_blank" rel="noreferrer" aria-label="CodeChef">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M11.257 0C5.04 0 0 4.97 0 11.11c0 3.86 1.98 7.27 5.01 9.37l-.26 1.78a.5.5 0 0 0 .72.52l2.02-1.01a11.4 11.4 0 0 0 3.76.63c6.22 0 11.26-4.97 11.26-11.1C22.51 4.97 17.47 0 11.26 0zm-.01 2.06c5.07 0 9.19 4.05 9.19 9.04 0 4.99-4.12 9.04-9.19 9.04a9.3 9.3 0 0 1-3.3-.6l-.28-.11-1.3.65.17-1.14-.22-.16A8.94 8.94 0 0 1 2.07 11.1c0-4.99 4.12-9.04 9.19-9.04zm.48 3.57c-1.07 0-1.88.26-2.43.78-.55.52-.82 1.27-.82 2.27v.42H7.9v1.68h1.55v5.18h2.02V10.78h1.94l.26-1.68h-2.2v-.34c0-.44.1-.74.3-.91.2-.17.54-.25 1.02-.25h.91V5.63h-.96zm3.5 0v1.97h.98c.41 0 .71.09.9.28.2.19.3.48.3.89v.31h-2.18v1.68h2.18v5.18h2.01V10.78h1.04V9.1h-1.04v-.39c0-1-.27-1.76-.82-2.27-.54-.52-1.35-.78-2.42-.78h-.95z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {year} Sri Harsha Reddy. Crafted with ❤️ using React + Vite.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
