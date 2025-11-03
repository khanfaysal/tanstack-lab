import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#4270dd",
        padding: "1rem 2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Tanstack Lab
        </Link>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.2s",
            }}
            activeProps={{
              style: {
                color: "#000",
                fontWeight: "bold",
              },
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.2s",
            }}
            activeProps={{
              style: {
                color: "#000",
                fontWeight: "bold",
              },
            }}
          >
            About
          </Link>

          <Link
            to="/blog"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "color 0.2s",
            }}
            activeProps={{
              style: {
                color: "#000",
                fontWeight: "bold",
              },
            }}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
