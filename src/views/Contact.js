import React from "react";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = f.get("name"),
      email = f.get("email"),
      message = f.get("message");
    const to = "yigon.kim1@gmail.com";
    const subject = encodeURIComponent(`[Portfolio] Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact" aria-label="Contact">
      {/* Title spans full width */}
      <h2 className="contact__title">Contact</h2>

      {/* Two columns directly under the title */}
      <div className="contact__inner">
        {/* LEFT: info (vertically centered vs. form) */}
        <div className="contact__intro">
          <ul className="contact__list" aria-label="Direct contact">
            <li>
              <a href="tel:+14039780807" className="contact__link">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79a15.52 15.52 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"
                  />
                </svg>
                +1 (403) 978-0807
              </a>
            </li>
            <li>
              <a href="mailto:yigon.kim1@gmail.com" className="contact__link">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 7L4 6h16Z"
                  />
                </svg>
                yigon.kim1@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kim-yigon/"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    fill="currentColor"
                    d="M6.94 8.5H4V20h2.94V8.5ZM5.47 7.16a1.71 1.71 0 1 0 0-3.42 1.71 1.71 0 0 0 0 3.42ZM20 20h-2.92v-5.57c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96V20H10.1V8.5h2.8v1.57h.04c.39-.73 1.36-1.5 2.8-1.5 2.99 0 3.55 1.97 3.55 4.53V20Z"
                  />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: form card */}
        <div
          className="contact__card"
          role="region"
          aria-label="Send a message"
        >
          <form className="form" onSubmit={onSubmit}>
            <div className="grid2">
              <label className="field">
                <span className="label">Name</span>
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="field">
                <span className="label">Email</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label className="field">
              <span className="label">Message</span>
              <textarea
                className="textarea"
                name="message"
                placeholder="Your message"
                required
              />
            </label>
            <div className="contact__actions">
              <button className="btn" type="submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
