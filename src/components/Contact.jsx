import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                    </p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <a className="contact-card" href="mailto:2400031017cse1@gmail.com">
                            <span className="contact-card-icon">📧</span>
                            <div>
                                <h4>Email</h4>
                                <span>2400031017cse1@gmail.com</span>
                            </div>
                        </a>
                        <a className="contact-card" href="tel:+919441918666">
                            <span className="contact-card-icon">📞</span>
                            <div>
                                <h4>Phone</h4>
                                <span>+91 94419 18666</span>
                            </div>
                        </a>
                        <a className="contact-card" href="https://www.linkedin.com/in/gundlapallisriharshareddy/" target="_blank" rel="noreferrer">
                            <span className="contact-card-icon">💼</span>
                            <div>
                                <h4>LinkedIn</h4>
                                <span>gundlapallisriharshareddy</span>
                            </div>
                        </a>
                        <a className="contact-card" href="https://github.com/sriharsha8076" target="_blank" rel="noreferrer">
                            <span className="contact-card-icon">🐙</span>
                            <div>
                                <h4>GitHub</h4>
                                <span>sriharsha8076</span>
                            </div>
                        </a>
                        <a className="contact-card" href="https://www.codechef.com/users/kl2400031017" target="_blank" rel="noreferrer">
                            <span className="contact-card-icon">💻</span>
                            <div>
                                <h4>CodeChef</h4>
                                <span>kl2400031017</span>
                            </div>
                        </a>
                        <div className="contact-card">
                            <span className="contact-card-icon">📍</span>
                            <div>
                                <h4>Location</h4>
                                <span>Vijayawada, Andhra Pradesh</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrap">
                        {submitted ? (
                            <div className="form-success">
                                <div className="success-icon">🎉</div>
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out! I&apos;ll get back to you shortly.</p>
                                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className={`btn btn-primary btn-full ${loading ? "loading" : ""}`} disabled={loading}>
                                    {loading ? "Sending..." : "Send Message →"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
