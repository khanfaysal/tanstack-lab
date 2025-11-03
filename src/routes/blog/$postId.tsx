import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$postId")({
  component: BlogPost,
});

interface BlogPostData {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const blogPostsData: Record<number, BlogPostData> = {
  1: {
    id: 1,
    title: "Getting Started with TanStack Router",
    content: `
      <h2>Introduction</h2>
      <p>TanStack Router is a powerful, type-safe routing solution for React applications. In this comprehensive guide, we'll explore how to leverage its features to build modern web applications.</p>
      
      <h2>Why TanStack Router?</h2>
      <p>TanStack Router provides several advantages over traditional routing solutions:</p>
      <ul>
        <li><strong>Type Safety:</strong> Full TypeScript support with automatic type inference for routes, params, and search parameters</li>
        <li><strong>Performance:</strong> Built-in code splitting and lazy loading capabilities</li>
        <li><strong>Developer Experience:</strong> File-based routing with automatic route generation</li>
        <li><strong>Flexibility:</strong> Works seamlessly with any React setup</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Setting up TanStack Router is straightforward. First, install the required packages:</p>
      <pre><code>npm install @tanstack/react-router</code></pre>

      <h2>Creating Your First Route</h2>
      <p>Routes in TanStack Router are defined using file-based routing. Simply create a file in your routes directory, and the router automatically picks it up.</p>

      <h2>Advanced Features</h2>
      <p>TanStack Router offers powerful features like:</p>
      <ul>
        <li>Search parameter management</li>
        <li>Route loaders for data fetching</li>
        <li>Nested layouts</li>
        <li>Protected routes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>TanStack Router is an excellent choice for modern React applications. Its type-safe approach and developer-friendly features make it a joy to work with.</p>
    `,
    author: "John Doe",
    date: "Nov 1, 2025",
    category: "Tutorial",
    readTime: "5 min read",
    image:
      "https://via.placeholder.com/1200x400/3178c6/ffffff?text=TanStack+Router",
  },
  2: {
    id: 2,
    title: "Building Scalable Web Applications",
    content: `
      <h2>Introduction to Scalability</h2>
      <p>Building scalable web applications requires careful planning and architecture. In this article, we'll explore proven patterns and practices.</p>

      <h2>Key Principles</h2>
      <ul>
        <li>Separation of concerns</li>
        <li>Modularity and reusability</li>
        <li>Performance optimization</li>
        <li>Maintainable code structure</li>
      </ul>

      <h2>Architecture Patterns</h2>
      <p>Modern web applications benefit from well-established architecture patterns like component-based design, state management, and API abstraction layers.</p>

      <h2>Best Practices</h2>
      <p>Follow these best practices to ensure your application scales effectively:</p>
      <ul>
        <li>Write clean, documented code</li>
        <li>Implement proper testing strategies</li>
        <li>Use TypeScript for type safety</li>
        <li>Optimize bundle size and performance</li>
      </ul>
    `,
    author: "Jane Smith",
    date: "Oct 28, 2025",
    category: "Development",
    readTime: "8 min read",
    image:
      "https://via.placeholder.com/1200x400/646cff/ffffff?text=Scalable+Applications",
  },
  3: {
    id: 3,
    title: "TypeScript Tips and Tricks",
    content: `
      <h2>Advanced TypeScript Patterns</h2>
      <p>TypeScript offers powerful features that can make your code more robust and maintainable. Let's explore some advanced patterns.</p>

      <h2>Utility Types</h2>
      <p>TypeScript provides built-in utility types that can help you transform types efficiently:</p>
      <ul>
        <li><code>Partial&lt;T&gt;</code> - Makes all properties optional</li>
        <li><code>Required&lt;T&gt;</code> - Makes all properties required</li>
        <li><code>Pick&lt;T, K&gt;</code> - Select specific properties</li>
        <li><code>Omit&lt;T, K&gt;</code> - Exclude specific properties</li>
      </ul>

      <h2>Generics</h2>
      <p>Generics allow you to write reusable, type-safe code that works with multiple types.</p>

      <h2>Type Guards</h2>
      <p>Type guards help TypeScript narrow down types in conditional statements, making your code safer and more predictable.</p>
    `,
    author: "Mike Johnson",
    date: "Oct 25, 2025",
    category: "TypeScript",
    readTime: "6 min read",
    image:
      "https://via.placeholder.com/1200x400/007acc/ffffff?text=TypeScript+Tips",
  },
  4: {
    id: 4,
    title: "Modern CSS Techniques",
    content: `
      <h2>CSS in 2025</h2>
      <p>CSS has evolved significantly. Modern CSS offers powerful features that make styling easier and more maintainable.</p>

      <h2>CSS Grid</h2>
      <p>CSS Grid is a two-dimensional layout system that makes complex layouts simple and intuitive.</p>

      <h2>Flexbox</h2>
      <p>Flexbox remains essential for one-dimensional layouts and component alignment.</p>

      <h2>Custom Properties</h2>
      <p>CSS custom properties (variables) enable dynamic theming and reduce code duplication.</p>

      <h2>Container Queries</h2>
      <p>Container queries allow components to respond to their container size rather than viewport size.</p>
    `,
    author: "Sarah Williams",
    date: "Oct 20, 2025",
    category: "CSS",
    readTime: "7 min read",
    image: "https://via.placeholder.com/1200x400/264de4/ffffff?text=Modern+CSS",
  },
  5: {
    id: 5,
    title: "React Performance Optimization",
    content: `
      <h2>Optimizing React Applications</h2>
      <p>Performance is crucial for user experience. Let's explore techniques to make your React apps faster.</p>

      <h2>Memoization</h2>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.</p>

      <h2>Code Splitting</h2>
      <p>Break your application into smaller chunks that load on demand using dynamic imports.</p>

      <h2>Virtual Lists</h2>
      <p>For long lists, implement virtualization to render only visible items.</p>

      <h2>Profiling</h2>
      <p>Use React DevTools Profiler to identify performance bottlenecks.</p>
    `,
    author: "John Doe",
    date: "Oct 15, 2025",
    category: "React",
    readTime: "10 min read",
    image:
      "https://via.placeholder.com/1200x400/61dafb/000000?text=React+Performance",
  },
  6: {
    id: 6,
    title: "Introduction to Server Components",
    content: `
      <h2>React Server Components</h2>
      <p>Server Components represent a paradigm shift in how we build React applications.</p>

      <h2>What are Server Components?</h2>
      <p>Server Components run on the server and send rendered output to the client, reducing JavaScript bundle size.</p>

      <h2>Benefits</h2>
      <ul>
        <li>Reduced bundle size</li>
        <li>Direct database access</li>
        <li>Better initial page load</li>
        <li>Improved SEO</li>
      </ul>

      <h2>When to Use</h2>
      <p>Server Components are ideal for content-heavy pages, data fetching, and static content.</p>

      <h2>Getting Started</h2>
      <p>Modern frameworks like Next.js and TanStack Start provide built-in support for Server Components.</p>
    `,
    author: "Jane Smith",
    date: "Oct 10, 2025",
    category: "React",
    readTime: "9 min read",
    image:
      "https://via.placeholder.com/1200x400/61dafb/000000?text=Server+Components",
  },
};

function BlogPost() {
  const { postId } = Route.useParams();
  const post = blogPostsData[parseInt(postId)];

  if (!post) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Blog Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link
          to="/blog"
          style={{ color: "#3178c6", textDecoration: "underline" }}
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article
      style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}
    >
      {/* Back Button */}
      <Link
        to="/blog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "#3178c6",
          textDecoration: "none",
          marginBottom: "30px",
          fontSize: "0.95rem",
        }}
      >
        ← Back to Blog
      </Link>

      {/* Category Badge */}
      <span
        style={{
          display: "inline-block",
          padding: "6px 16px",
          backgroundColor: "#e3f2fd",
          color: "#3178c6",
          borderRadius: "16px",
          fontSize: "0.875rem",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        {post.category}
      </span>

      {/* Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          lineHeight: "1.2",
          color: "#1a1a1a",
        }}
      >
        {post.title}
      </h1>

      {/* Meta Info */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          paddingBottom: "20px",
          borderBottom: "1px solid #eee",
          fontSize: "0.95rem",
          color: "#666",
        }}
      >
        <span style={{ fontWeight: "600", color: "#333" }}>{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      {/* Featured Image */}
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "40px",
        }}
      />

      {/* Content */}
      <div
        style={{
          lineHeight: "1.8",
          fontSize: "1.1rem",
          color: "#333",
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Share Section */}
      <div
        style={{
          marginTop: "60px",
          paddingTop: "30px",
          borderTop: "2px solid #eee",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Share this article</h3>
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#1DA1F2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Twitter
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#0077B5",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            LinkedIn
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Copy Link
          </button>
        </div>
      </div>

      {/* Back to Blog */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Link
          to="/blog"
          style={{
            display: "inline-block",
            padding: "12px 30px",
            backgroundColor: "#3178c6",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "600",
          }}
        >
          View All Posts
        </Link>
      </div>
    </article>
  );
}
