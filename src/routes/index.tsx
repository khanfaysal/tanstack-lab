import { createFileRoute } from "@tanstack/react-router";
import seaBeachRelaxingVideo from "../assets/sea-beach realx.mp4";
import { Card } from "../components/Card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Welcome to Tanstack Lab!
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Learn about tanstack easy way.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <video
            src={seaBeachRelaxingVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "150px",
              height: "auto",
            }}
          ></video>
        </div>
      </header>
      <section style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <Card
            title="Learn"
            description="Explore the fundamentals of TanStack Router and understand how routing works in modern React apps."
          />
          <Card
            title="Action"
            description="Put your knowledge into practice by building dynamic routes, handling params, and managing navigation."
          />
          <Card
            title="Enjoy"
            description="Experience the speed and simplicity of development with Vite and TanStack’s powerful tools."
          />
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: "20px" }}>Quick Links</h2>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a
            href="https://tanstack.com/router"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              background: "#3178c6",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            TanStack Router Docs
          </a>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              background: "#646cff",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Vite Docs
          </a>
        </div>
      </section>
    </div>
  );
}
