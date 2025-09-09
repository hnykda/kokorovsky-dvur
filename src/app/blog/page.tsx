import Link from "next/link";
import { getAvailableReports } from "@/lib/mdx-utils";

export default function BlogIndex() {
  const reports = getAvailableReports();

  return (
    <section>
      <h2>Posts</h2>
      <div className="reports-list">
        {reports.map((report, index) => (
          <div key={index} className="report-item">
            <div className="report-date">{report.date}</div>
            {report.slug ? (
              <Link href={`/reports/${report.slug}`} className="report-title">
                {report.title}
                {report.description && (
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      marginTop: "0.25rem",
                      fontWeight: "normal",
                    }}
                  >
                    {report.description}
                  </div>
                )}
              </Link>
            ) : (
              <span
                className="report-title"
                style={{
                  color: "var(--text-secondary)",
                  cursor: "default",
                }}
              >
                {report.title}
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginLeft: "0.5rem",
                    fontStyle: "italic",
                  }}
                >
                  (Coming soon)
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
