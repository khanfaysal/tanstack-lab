import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: Blog,
});

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with TanStack Router",
    excerpt:
      "Learn how to build modern React applications with type-safe routing using TanStack Router.",
    author: "John Doe",
    date: "Nov 1, 2025",
    category: "Tutorial",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices for creating maintainable and scalable web applications in 2025.",
    author: "Jane Smith",
    date: "Oct 28, 2025",
    category: "Development",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "TypeScript Tips and Tricks",
    excerpt:
      "Advanced TypeScript patterns that will make your code more robust and maintainable.",
    author: "Mike Johnson",
    date: "Oct 25, 2025",
    category: "TypeScript",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Modern CSS Techniques",
    excerpt:
      "Explore the latest CSS features including Grid, Flexbox, and custom properties.",
    author: "Sarah Williams",
    date: "Oct 20, 2025",
    category: "CSS",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "React Performance Optimization",
    excerpt:
      "Practical techniques to improve your React application performance and user experience.",
    author: "John Doe",
    date: "Oct 15, 2025",
    category: "React",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Introduction to Server Components",
    excerpt:
      "Understanding React Server Components and how they change the way we build applications.",
    author: "Jane Smith",
    date: "Oct 10, 2025",
    category: "React",
    readTime: "9 min read",
  },
];

function Blog() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Blog</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Articles, tutorials, and insights about web development
        </p>
      </header>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["All", "Tutorial", "Development", "TypeScript", "CSS", "React"].map(
          (category) => (
            <button
              key={category}
              style={{
                padding: "8px 16px",
                border: "1px solid #ddd",
                borderRadius: "20px",
                backgroundColor: category === "All" ? "#3178c6" : "#fff",
                color: category === "All" ? "#fff" : "#333",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "30px",
        }}
      >
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "24px",
        backgroundColor: "#fff",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "4px 12px",
          backgroundColor: "#e3f2fd",
          color: "#3178c6",
          borderRadius: "12px",
          fontSize: "0.75rem",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        {post.category}
      </span>

      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "12px",
          color: "#1a1a1a",
        }}
      >
        {post.title}
      </h2>

      <p
        style={{
          color: "#666",
          lineHeight: "1.6",
          marginBottom: "16px",
        }}
      >
        {post.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "16px",
          borderTop: "1px solid #eee",
          fontSize: "0.875rem",
          color: "#999",
        }}
      >
        <div>
          <span style={{ fontWeight: "600", color: "#333" }}>
            {post.author}
          </span>
          <span style={{ margin: "0 8px" }}>•</span>
          <span>{post.date}</span>
        </div>
        <span>{post.readTime}</span>
      </div>
      <Link
        to={`/blog/${post.id}`}
        style={{
          display: "inline-block",
          marginTop: "16px",
          color: "#3178c6",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Read more →
      </Link>
    </article>
  );
}
