import { useState } from "react";

// TODO: replace with a real Formspree form endpoint (sign up free at
// https://formspree.io, create a form, it emails submissions to you).
// Until this is a real endpoint ID, the form will fail to submit.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_ME";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Have a role in mind, or just want to connect? Send a message.</p>

      {status === "sent" ? (
        <p className="contact-success">Thanks, your message is on its way. I'll get back to you soon.</p>
      ) : (
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
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && (
            <p className="contact-error">
              Something went wrong. You can also email me directly at{" "}
              <a href="mailto:kanojiamegha326@gmail.com">kanojiamegha326@gmail.com</a>.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
