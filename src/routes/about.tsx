import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0")
  );
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return readCount();
});

const updateCount = createServerFn({ method: "POST" })
  .inputValidator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute("/about")({
  component: About,
  loader: async () => await getCount(),
});

function About() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>About Page</h1>
      <p style={{ marginBottom: "30px" }}>
        This is a counter example using TanStack Start server functions.
      </p>

      <div
        style={{
          padding: "30px",
          border: "2px solid #ddd",
          borderRadius: "8px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          Current Count:{" "}
          <strong style={{ fontSize: "2rem", color: "#3178c6" }}>
            {state}
          </strong>
        </p>

        <button
          type="button"
          onClick={() => {
            updateCount({ data: 1 }).then(() => {
              router.invalidate();
            });
          }}
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: "#3178c6",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#2563a8")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#3178c6")
          }
        >
          Add 1 to {state}
        </button>
      </div>
    </div>
  );
}
