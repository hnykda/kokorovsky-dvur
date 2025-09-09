import type { ComponentProps } from "react";

type MDXComponents = {
  [key: string]: React.ComponentType<any>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom styles for MDX content
    h1: ({ children }) => (
      <h1 style={{ 
        color: "#2563eb", 
        fontSize: "2rem", 
        marginBottom: "1.5rem",
        borderBottom: "2px solid #e5e7eb",
        paddingBottom: "0.5rem"
      }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ 
        color: "#374151", 
        fontSize: "1.5rem", 
        marginTop: "2rem",
        marginBottom: "1rem"
      }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ 
        color: "#374151", 
        fontSize: "1.25rem", 
        marginTop: "1.5rem",
        marginBottom: "0.75rem"
      }}>
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p style={{ 
        lineHeight: "1.7", 
        marginBottom: "1rem",
        color: "#374151"
      }}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{
        borderLeft: "4px solid #2563eb",
        paddingLeft: "1rem",
        marginLeft: "0",
        fontStyle: "italic",
        color: "#6b7280",
        background: "#f9fafb",
        padding: "1rem",
        borderRadius: "0.5rem"
      }}>
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul style={{ 
        paddingLeft: "1.5rem", 
        marginBottom: "1rem",
        lineHeight: "1.7"
      }}>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol style={{ 
        paddingLeft: "1.5rem", 
        marginBottom: "1rem",
        lineHeight: "1.7"
      }}>
        {children}
      </ol>
    ),
    code: ({ children }) => (
      <code style={{
        background: "#f3f4f6",
        padding: "0.25rem 0.5rem",
        borderRadius: "0.25rem",
        fontSize: "0.875rem",
        fontFamily: "ui-monospace, 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace"
      }}>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre style={{
        background: "#1f2937",
        color: "#f9fafb",
        padding: "1rem",
        borderRadius: "0.5rem",
        overflow: "auto",
        fontSize: "0.875rem",
        marginBottom: "1rem"
      }}>
        {children}
      </pre>
    ),
    // Add any custom components here
    ...components,
  };
}