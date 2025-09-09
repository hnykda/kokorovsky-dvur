import fs from "fs";
import path from "path";

interface ReportMetadata {
  title: string;
  date: string;
  description?: string;
  author?: string;
  tags?: string[];
}

interface ReportItem {
  date: string;
  title: string;
  slug: string;
  description?: string;
  author?: string;
  tags?: string[];
}

// Parse frontmatter from MDX content
function parseFrontmatter(content: string): {
  metadata: ReportMetadata;
  content: string;
} {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    throw new Error("Invalid frontmatter format");
  }

  const frontmatterString = match[1];
  const mdxContent = match[2];
  const metadata: Partial<ReportMetadata> = {};

  frontmatterString.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      const value = valueParts
        .join(":")
        .trim()
        .replace(/^["']|["']$/g, "");
      if (key.trim() === "tags") {
        // Parse array format [tag1, tag2, tag3]
        metadata.tags = value
          .replace(/^\[|\]$/g, "")
          .split(",")
          .map((tag: string) => tag.trim().replace(/^["']|["']$/g, ""));
      } else {
        // Use type assertion to handle the dynamic key assignment
        (metadata as Record<string, string>)[key.trim()] = value;
      }
    }
  });

  return {
    metadata: metadata as ReportMetadata,
    content: mdxContent,
  };
}

// Get all available MDX reports from the content directory
export function getAvailableReports(): ReportItem[] {
  const contentDirectory = path.join(process.cwd(), "content");

  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  try {
    const files = fs.readdirSync(contentDirectory);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const mdxReports: ReportItem[] = mdxFiles.map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(contentDirectory, file);

      try {
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { metadata } = parseFrontmatter(fileContent);

        return {
          date: metadata.date,
          title: metadata.title,
          slug: slug,
          description: metadata.description,
          author: metadata.author,
          tags: metadata.tags,
        };
      } catch (error) {
        console.warn(`Error parsing ${file}:`, error);
        // Fallback to filename-based title
        return {
          date: "Date unavailable",
          title: slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          slug: slug,
        };
      }
    });

    // Sort by date (newest first) - convert date strings for proper sorting
    mdxReports.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    return mdxReports;
  } catch (error) {
    console.warn("Error reading content directory:", error);
    return [];
  }
}

// Get a specific report by slug
export function getReportBySlug(
  slug: string,
): { metadata: ReportMetadata; content: string } | null {
  const contentDirectory = path.join(process.cwd(), "content");
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    return parseFrontmatter(fileContent);
  } catch (error) {
    console.error("Error loading MDX content:", error);
    return null;
  }
}

// Get all available report slugs for generateStaticParams
export function getAllReportSlugs(): string[] {
  const contentDirectory = path.join(process.cwd(), "content");

  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  try {
    const files = fs.readdirSync(contentDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.warn("Error reading content directory:", error);
    return [];
  }
}
