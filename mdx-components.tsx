import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="font-serif font-bold text-3xl text-primary mt-8 mb-4"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="font-serif font-bold text-2xl text-primary mt-6 mb-3"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="font-serif font-bold text-xl text-primary mt-5 mb-2"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="font-sans text-text-muted mb-4"
        style={{ lineHeight: 1.8, fontSize: "0.975rem" }}
        {...props}
      />
    ),
    strong: (props) => <strong className="font-bold text-text-dark" {...props} />,
    ul: (props) => (
      <ul
        className="font-sans text-text-muted list-disc pl-6 mb-4 space-y-1"
        style={{ lineHeight: 1.8, fontSize: "0.975rem" }}
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="font-sans text-text-muted list-decimal pl-6 mb-4 space-y-1"
        style={{ lineHeight: 1.8, fontSize: "0.975rem" }}
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-accent pl-4 my-4 italic text-text-muted"
        {...props}
      />
    ),
    hr: () => <hr className="border-primary/10 my-8" />,
    ...components,
  };
}
