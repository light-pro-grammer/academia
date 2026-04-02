import type { MDXComponents } from "mdx/types";
import SkipCountingExplorer from "@/components/lessons/SkipCountingExplorer";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}