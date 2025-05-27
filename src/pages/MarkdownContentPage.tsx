import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const MarkdownContentPage = ({ contentType = '' }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { sectionId, subsectionId } = params;
        let contentPath;
        const pathType = contentType || window.location.pathname.split('/')[1];

        switch (pathType) {
          case 'mechanics':
          case 'classical-mechanics':
            contentPath = `/content/classical-mechanics/${sectionId}/${subsectionId}.md`;
            break;
          case 'waves':
          case 'waves-and-oscillations':
            // Handle the waves-and-oscillations specific file structure
            contentPath = `/content/waves-and-oscillations/${sectionId}/waves-${subsectionId}.md`;
            break;
          case 'electromagnetism':
            contentPath = `/content/electromagnetism/${sectionId}/${subsectionId}.md`;
            break;
          case 'quantum-physics':
            contentPath = `/content/quantum-physics/${sectionId}/${subsectionId}.md`;
            break;
          case 'light':
            // Handle the light specific file structure
            contentPath = `/content/light/${sectionId}/light-${subsectionId}.md`;
            break;
          default:
            setError(`Unknown content type: ${pathType}\n\nRoute parameters: ${JSON.stringify(params, null, 2)}\n\nCurrent URL: ${window.location.pathname}\n\nNote: Make sure the markdown file exists in the correct content directory`);
            return;
        }

        console.log('Fetching from:', contentPath);
        
        const response = await fetch(contentPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.status} ${response.statusText}\nPath: ${contentPath}`);
        }

        const text = await response.text();
        
        // Verify we got markdown content
        if (text.trim().toLowerCase().startsWith('<!doctype html>')) {
          throw new Error(`Received HTML instead of markdown. The file may not exist at: ${contentPath}`);
        }

        setContent(text);
        setError(null);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError(err instanceof Error ? err.message : 'Failed to load content');
      }
    };

    fetchContent();
  }, [params, contentType]);

  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 dark:bg-red-900 dark:text-red-100 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Error Loading Content</h2>
        <pre className="whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownContentPage;
