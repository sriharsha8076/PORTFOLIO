import "./Hackathons.css";

const hackathons = [
    {
        id: 1,
        name: "Guidewire DEVTrails University Hackathon 2026",
        organizer: "Guidewire Software",
        type: "National Virtual Hackathon",
        duration: "45 Days",
        prize: "₹6 Lakhs Prize Pool",
        venue: "Virtual (India-Wide)",
        year: "2026",
        icon: "🏆",
        color: "#f59e0b",
        tags: ["AI / InsurTech", "Cloud Innovation", "India-Wide"],
        description:
            "A premier 45-day virtual hackathon for students across India to develop AI-driven InsurTech solutions. Participated and worked on solving real-world insurance challenges through AI, cloud innovation, and mentorship from industry experts.",
        status: "Participated",
        grade: null,
    },
    {
        id: 2,
        name: "Frontend Development Hackathon",
        organizer: "KL University",
        type: "College Hackathon",
        duration: "In-College Event",
        prize: "O Grade — Outstanding (Highest Possible)",
        venue: "KL University, Guntur",
        year: "2025",
        icon: "🎖️",
        color: "#a78bfa",
        tags: ["Frontend", "React", "UI/UX", "Web Dev"],
        description:
            "An in-college frontend development hackathon organized by KL University. Built a complete, polished frontend project and secured an O Grade — the highest grade awarded — recognizing outstanding performance and code quality.",
        status: "O Grade — Outstanding",
        statusColor: "#f59e0b",
        grade: "O",
    },
];

const HackathonCard = ({ hackathon }) => {
    const sColor = hackathon.statusColor || "#4ade80";
    return (
        <div className="hackathon-card" style={{ "--h-color": hackathon.color }}>
            <div className="hackathon-card-glow"></div>
            <div className="hackathon-header">
                <div className="hackathon-icon" style={{ background: `${hackathon.color}18`, border: `1px solid ${hackathon.color}44` }}>
                    {hackathon.icon}
                </div>
                <div className="hackathon-meta">
                    <span className="hackathon-status" style={{ color: sColor, borderColor: `${sColor}44`, background: `${sColor}12` }}>
                        {hackathon.grade ? `🥇 ${hackathon.status}` : `✓ ${hackathon.status}`}
                    </span>
                    <span className="hackathon-year">{hackathon.year}</span>
                </div>
            </div>
            <h3 className="hackathon-name">{hackathon.name}</h3>
            <p className="hackathon-organizer">{hackathon.organizer} · {hackathon.type}</p>
            <p className="hackathon-description">{hackathon.description}</p>
            <div className="hackathon-stats">
                <div className="hackathon-stat">
                    <span className="hstat-icon">⏱️</span>
                    <span>{hackathon.duration}</span>
                </div>
                <div className="hackathon-stat">
                    <span className="hstat-icon">🏅</span>
                    <span>{hackathon.prize}</span>
                </div>
                <div className="hackathon-stat">
                    <span className="hstat-icon">📍</span>
                    <span>{hackathon.venue}</span>
                </div>
            </div>
            <div className="hackathon-tags">
                {hackathon.tags.map((tag) => (
                    <span key={tag} className="hackathon-tag" style={{ color: hackathon.color, borderColor: `${hackathon.color}44` }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Hackathons = () => (
    <section id="hackathons" className="hackathons section">
        <div className="container">
            <div className="section-header">
                <span className="section-tag">Achievements</span>
                <h2 className="section-title">Hackathons</h2>
                <p className="section-subtitle">Competitions I&apos;ve participated in and challenges I&apos;ve tackled.</p>
            </div>
            <div className="hackathons-grid">
                {hackathons.map((h) => (
                    <HackathonCard key={h.id} hackathon={h} />
                ))}
            </div>
        </div>
    </section>
);

export default Hackathons;
