import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { ContentSection } from '../../types/content';

interface MarkdownRendererProps {
  content: ContentSection | string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
}) => {
  const markdownContent = typeof content === 'string' 
    ? content 
    : content.content;

  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          img: ({ src, alt }) => (
            <img 
              src={src} 
              alt={alt || ''} 
              className="max-w-full h-auto my-4"
              loading="lazy"
            />
          ),
          p: ({ children }) => (
            <p className="my-4">{children}</p>
          ),
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold my-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold my-5">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-medium my-4">{children}</h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
          ),
          code: ({ inline, children }) => (
            inline 
              ? <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{children}</code>
              : <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded my-4 overflow-x-auto">
                  <code>{children}</code>
                </pre>
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};