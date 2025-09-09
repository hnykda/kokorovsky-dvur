import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllReportSlugs, getReportBySlug } from "@/lib/mdx-utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all MDX files
export async function generateStaticParams() {
  const slugs = getAllReportSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ReportPage({ params }: PageProps) {
  const { slug } = await params;

  // Get report data using utility function
  const reportData = getReportBySlug(slug);

  if (!reportData) {
    notFound();
  }

  const { metadata } = reportData;

  try {
    // Import the MDX content dynamically
    const MDXContent = (await import(`../../../../content/${slug}.mdx`))
      .default;

    return (
      <>
        {/* Article header */}
        <header style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "var(--text-primary)",
            }}
          >
            {metadata.title}
          </h1>

          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              marginBottom: "1rem",
            }}
          >
            <span>{metadata.date}</span>
            {metadata.author && <span> • by {metadata.author}</span>}
          </div>

          {metadata.description && (
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                fontStyle: "italic",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {metadata.description}
            </p>
          )}

          {metadata.tags && metadata.tags.length > 0 && (
            <div style={{ marginTop: "1rem" }}>
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    background: "var(--gray-100)",
                    color: "var(--text-secondary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "1rem",
                    fontSize: "0.8rem",
                    margin: "0.25rem",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article content */}
        <article
          style={{
            lineHeight: "1.7",
            fontSize: "1rem",
          }}
        >
          <MDXContent />
        </article>
      </>
    );
  } catch (error) {
    console.error("Error loading MDX content:", error);
    notFound();
  }
}
