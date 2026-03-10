import "./Certifications.css";

const certs = [
    {
        id: 1,
        name: "GitHub Copilot",
        issuer: "Microsoft Learn",
        issuerLogo: "🏆",
        platform: "Microsoft & GitHub",
        year: "2025",
        color: "#60a5fa",
        description:
            "Earned the GitHub Copilot credential from Microsoft Learn, demonstrating proficiency in AI-assisted development, prompt engineering, and using GitHub Copilot to boost coding productivity.",
        tags: ["AI", "GitHub Copilot", "Developer Tools"],
        credentialUrl: "https://learn.microsoft.com/en-us/users/GUNDLAPALLISRIHARSHAREDDY-4177/credentials/66E81F63E3809590",
        shareUrl: "https://learn.microsoft.com/api/credentials/share/en-us/GUNDLAPALLISRIHARSHAREDDY-4177/66E81F63E3809590?sharingId=AA2E481EC7B8CDC5",
    },
    {
        id: 2,
        name: "Introduction to Machine Learning",
        issuer: "NPTEL (Funded by MoE, Govt. of India)",
        issuerLogo: "🎓",
        platform: "IIT Madras / Swayam",
        year: "Oct 2025",
        color: "#e11d48",
        description:
            "Successfully completed the 12-week NPTEL online course and proctored exam, awarded the Elite certification with a consolidated score of 65%.",
        tags: ["Machine Learning", "NPTEL", "Elite"],
        credentialUrl: "/certificates/nptel-ml.png",
        shareUrl: "/certificates/nptel-ml.png",
    },
];

const CertCard = ({ cert }) => (
    <div className="cert-card" style={{ "--cert-color": cert.color }}>
        <div className="cert-card-glow"></div>
        <div className="cert-header">
            <div className="cert-badge" style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}44` }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" style={{ color: cert.color }}>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4.18l6 2.67V11c0 3.88-2.63 7.52-6 8.93C8.63 18.52 6 14.88 6 11V7.85l6-2.67zm2.5 5.32L11 13.5l-1.5-1.5-1.41 1.41L11 16.33l4.91-4.91L14.5 10.5z" />
                </svg>
            </div>
            <div className="cert-meta">
                <span className="cert-verified">✓ Verified</span>
                <span className="cert-year">{cert.year}</span>
            </div>
        </div>
        <h3 className="cert-name">{cert.name}</h3>
        <p className="cert-issuer">
            <span style={{ color: cert.color }}>{cert.issuer}</span> · {cert.platform}
        </p>
        <p className="cert-description">{cert.description}</p>
        <div className="cert-tags">
            {cert.tags.map((tag) => (
                <span key={tag} className="cert-tag" style={{ color: cert.color, borderColor: `${cert.color}44` }}>
                    {tag}
                </span>
            ))}
        </div>
        <a
            href={cert.shareUrl}
            target="_blank"
            rel="noreferrer"
            className="cert-link"
            style={{ borderColor: `${cert.color}44`, color: cert.color }}
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            View Credential
        </a>
    </div>
);

const Certifications = () => (
    <section id="certifications" className="certifications section">
        <div className="container">
            <div className="section-header">
                <span className="section-tag">Credentials</span>
                <h2 className="section-title">Certifications</h2>
                <p className="section-subtitle">Verified credentials and courses I&apos;ve completed.</p>
            </div>
            <div className="certs-grid">
                {certs.map((cert) => (
                    <CertCard key={cert.id} cert={cert} />
                ))}
            </div>
        </div>
    </section>
);

export default Certifications;
