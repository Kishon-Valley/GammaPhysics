import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { getAIResponse } from '../services/ai';

export function AIAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    const response = await getAIResponse(
      `As a physics tutor, please explain: ${question}`
    );
    setAnswer(response);
    setLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center mb-6">
        <MessageCircle className="mr-2 w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold">AI Physics Assistant</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask any physics question..."
          className="p-3 w-full rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
        />
        <button
          type="submit"
          disabled={loading}
          className="flex justify-center items-center px-4 py-2 w-full text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
        >
          {loading ? 'Thinking...' : (
            <>
              Ask Question <Send className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {answer && (
        <div className="p-4 mt-6 bg-gray-50 rounded-lg">
          <h3 className="mb-2 font-bold">Answer:</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}