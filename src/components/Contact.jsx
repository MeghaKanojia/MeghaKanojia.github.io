import { useState } from "react";

const TO_EMAIL = "kanojiamegha326@gmail.com";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Portfolio contact from ${values.name}`;
    const body = `From: ${values.name} (${values.email})\n\n${values.message}`;
    const mailtoUrl = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSent(true);
  }

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Have a role in mind, or just want to connect? Send a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-field">
          <span>Name</span>
          <input type="text" name="name" required value={values.name} onChange={handleChange} />
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input type="email" name="email" required value={values.email} onChange={handleChange} />
        </label>
        <label className="contact-field">
          <span>Message</span>
          <textarea name="message" rows={5} required value={values.message} onChange={handleChange} />
        </label>
        <button className="btn btn-primary" type="submit">
          Send Message
        </button>
        {sent && (
          <p className="contact-success">
            Your email app should have opened with this message ready, just hit send there. If
            nothing opened, email me directly at <a href={`mailto:${TO_EMAIL}`}>{TO_EMAIL}</a>.
          </p>
        )}
      </form>
    </section>
  );
}
