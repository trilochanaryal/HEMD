"use client";

import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold mb-3 mt-6" {...props} />,
  p: (props: any) => <p className="mb-4 text-muted-foreground" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="text-muted-foreground" {...props} />,
  a: (props: any) => (
    <a
      className="text-primary hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
};

export function MDXWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      <div className="container mx-auto px-4 py-8 prose prose-gray dark:prose-invert max-w-none">
        {children}
      </div>
    </MDXProvider>
  );
}