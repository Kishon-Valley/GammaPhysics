import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import QuestionAnswer from '../components/QuestionAnswer';
import { extractQuestionsAndAnswers } from '../utils/markdownParser';

const ClassicalMechanicsStudyPage: React.FC = () => {
  const { sectionId, subsectionId } = useParams<{ sectionId: string; subsectionId: string }>();
  const [content, setContent] = useState<string>('');
  const [qaPairs, setQaPairs] = useState<Array<{ question: string; answer: string; type: 'regular' | 'tryout' }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const pathMap: Record<string, { fileName: string; section: string }> = {
          'universal-gravitation': { fileName: 'newtons-law-of-gravitation', section: 'gravitation' },
          'non-inertial-frames': { fileName: 'non-inertial-reference-frames', section: 'non-inertial-frames' },
          'advanced-mechanics': { fileName: 'advanced-mechanics', section: 'special-topics' }
        };

        let filePath;
        if (subsectionId) {
          const mapping = pathMap[subsectionId] || { fileName: subsectionId, section: sectionId };
          filePath = `/content/classical-mechanics/${mapping.section}/${mapping.fileName}.md`;
          console.log('Loading content from:', filePath);
        } else {
          filePath = `/content/classical-mechanics/${sectionId}.md`;
          console.log('Loading content from:', filePath);
        }

        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.statusText}`);
        }

        const text = await response.text();
        console.log('Raw markdown content:', text.substring(0, 500)); // Debug log
        
        // Extract Q&A pairs from the content
        const extractedQaPairs = extractQuestionsAndAnswers(text);
        console.log('Extracted Q&A pairs:', extractedQaPairs); // Debug log
        setQaPairs(extractedQaPairs);

        // Don't remove Q&A sections from main content
        setContent(text);

      } catch (err) {
        console.error('Error in fetchContent:', err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [sectionId, subsectionId]);

  if (isLoading) {
    return (
      <div className="p-4 mx-auto max-w-4xl">
        <Link to="/classical-mechanics" className="inline-block mb-4 text-blue-600 hover:underline">
          ← Back to Classical Mechanics
        </Link>
        <div className="mt-4">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 mx-auto max-w-4xl">
        <Link to="/classical-mechanics" className="inline-block mb-4 text-blue-600 hover:underline">
          ← Back to Classical Mechanics
        </Link>
        <div className="mt-4 text-red-600">Error: {error}</div>
      </div>
    );
  }

  console.log('Rendering qaPairs:', qaPairs);

  return (
    <div className="p-4 mx-auto max-w-4xl">
      {/* ← Back to Classical Mechanics link retained. Removed ← Back to Kinematics as requested. */}
      <Link to="/classical-mechanics" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Classical Mechanics
      </Link>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        className="max-w-none prose prose-lg dark:prose-invert [&_img]:bg-white [&_img]:p-4 [&_img]:rounded-lg"
      >
        {content}
      </ReactMarkdown>

      {/* Regular Questions Section */}
      {qaPairs.filter(qa => qa.type === 'regular').length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Questions and Answers</h2>
          {qaPairs
            .filter(qa => qa.type === 'regular')
            .map((qa, index) => (
              <QuestionAnswer
                key={`regular-${index}`}
                question={qa.question}
                answer={qa.answer}
                questionNumber={index + 1}
                type="regular"
              />
            ))}
        </div>
      )}

      {/* Try Out Questions Section */}
      {qaPairs.filter(qa => qa.type === 'tryout').length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Try Out Questions</h2>
          {qaPairs
            .filter(qa => qa.type === 'tryout')
            .map((qa, index) => (
              <QuestionAnswer
                key={`tryout-${index}`}
                question={qa.question}
                answer={qa.answer}
                questionNumber={index + 1}
                type="tryout"
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ClassicalMechanicsStudyPage;