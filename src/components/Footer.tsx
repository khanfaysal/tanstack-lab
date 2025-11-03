import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#4270dd",
        color: "#fff",
        padding: "2rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* About Section */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>MyApp</h3>
          <p style={{ color: "#fff", lineHeight: "1.6" }}>
            Built with TanStack Router and Vite. Fast, type-safe, and modern.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <Link
                to="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Contact</h3>
          <p style={{ color: "#fff", lineHeight: "1.6" }}>
            Email: info@myapp.com
            <br />
            Phone: +123 456 7890
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto 0",
          paddingTop: "1rem",
          borderTop: "1px solid #333",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p>© 2025 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}
