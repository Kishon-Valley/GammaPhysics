import { QuestionAnswerPair } from '../types';

export function extractQuestionsAndAnswers(markdown: string): QuestionAnswerPair[] {
  if (!markdown) return [];

  const qaPairs: QuestionAnswerPair[] = [];
  const sections = markdown.split(/^##\s+/m);
  
  sections.forEach(section => {
    // Check if this is a Q&A section
    const isRegularQA = section.trim().startsWith('Questions and Answers');
    const isTryoutQA = section.trim().startsWith('Try Out Questions');
    
    if (isRegularQA || isTryoutQA) {
      const type = isTryoutQA ? 'tryout' : 'regular';
      const lines = section.split('\n');
      
      let currentQuestion = '';
      let currentAnswer = '';
      let answerLines: string[] = [];
      let isCollectingAnswer = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Look for question markers (Q1:, Q2:, etc.)
        const questionMatch = line.match(/^(?:###\s*)?Q\d+:\s*(.*)/);
        if (questionMatch) {
          // Save previous Q&A pair if exists
          if (currentQuestion && (currentAnswer || answerLines.length > 0)) {
            qaPairs.push({
              question: currentQuestion.trim(),
              answer: currentAnswer || answerLines.join('\n'),
              type
            });
            answerLines = [];
          }
          
          // Start new question
          currentQuestion = questionMatch[1];
          currentAnswer = '';
          isCollectingAnswer = false;
          continue;
        }
        
        // Look for answer markers (A1:, A2:, etc.)
        const answerMatch = line.match(/^(?:###\s*)?A\d+:\s*(.*)/);
        if (answerMatch) {
          isCollectingAnswer = true;
          currentAnswer = answerMatch[1];
          answerLines = [currentAnswer];
          continue;
        }
        
        // Add to current answer if we're collecting answer and line is not empty
        if (isCollectingAnswer && line) {
          answerLines.push(line);
        }
      }
      
      // Add the last Q&A pair if exists
      if (currentQuestion && (currentAnswer || answerLines.length > 0)) {
        qaPairs.push({
          question: currentQuestion.trim(),
          answer: currentAnswer || answerLines.join('\n'),
          type
        });
      }
    }
  });

  console.log('Extracted Q&A pairs:', qaPairs); // Debug log
  return qaPairs;
}

export function extractNavigationLinks(markdown: string): { prev?: string; next?: string } {
  const links: { prev?: string; next?: string } = {};
  
  // Look for navigation markers in the markdown
  const prevMatch = markdown.match(/\[←\s*Previous.*?\]\((.*?)\)/);
  const nextMatch = markdown.match(/\[Next.*?→\]\((.*?)\)/);

  if (prevMatch) links.prev = prevMatch[1];
  if (nextMatch) links.next = nextMatch[1];

  return links;
}
