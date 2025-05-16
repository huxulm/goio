import type { MDXComponents } from "mdx/types";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-3xl px-2 dark:text-red-500 dark:bg-white">{children}</h1>,
    pre: ({ children }) => <pre className="p-2">{children}</pre>,
    ...components,
  };
}