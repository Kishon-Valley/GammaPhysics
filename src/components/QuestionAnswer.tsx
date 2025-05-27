import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface QuestionAnswerProps {
  question: string;
  answer: string;
  questionNumber: number;
  type?: 'regular' | 'tryout';
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ 
  question, 
  answer, 
  questionNumber,
  type = 'regular' 
}) => {
  return (
    <div className="p-4 mb-6 bg-white rounded-lg shadow transition-shadow hover:shadow-md">
      {/* Question Section */}
      <div className="mb-4">
        <h4 className="flex items-center text-lg font-semibold">
          <span className={`mr-2 px-3 py-1 rounded-full ${
            type === 'regular' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
          }`}>
            Q{questionNumber}
          </span>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {question}
          </ReactMarkdown>
        </h4>
      </div>

      {/* Answer Section */}
      <div className="pl-11">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {answer}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
