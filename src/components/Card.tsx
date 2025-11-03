interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{ marginBottom: "10px", color: "#333" }}>{title}</h3>
      <p style={{ color: "#666", lineHeight: "1.6" }}>{description}</p>
    </div>
  );
}
