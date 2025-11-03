import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/$")({
  component: Docs,
});

function Docs() {
  const { _splat } = Route.useParams();
  const pathSegments = _splat ? _splat.split("/") : [];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Documentation</h1>
      <div style={{ marginBottom: "20px", color: "#666" }}>
        <Link to="/docs">Docs</Link>
        {pathSegments.map((segment, i) => (
          <span key={i}> / {segment}</span>
        ))}
      </div>
      <div>
        <p>Full path: /docs/{_splat}</p>
        <p>Segments: {JSON.stringify(pathSegments)}</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Quick Links:</h3>
        <ul>
          <li>
            <Link to="/docs/getting-started">Getting Started</Link>
          </li>
          <li>
            <Link to="/docs/api/reference">API Reference</Link>
          </li>
          <li>
            <Link to="/docs/guides/advanced">Advanced Guide</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
