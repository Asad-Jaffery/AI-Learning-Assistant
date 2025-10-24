'use client';
import { useState } from 'react';
import { Question } from '../types/question';
import { askAssignmentLLM } from '../utils/ask_assignment_mode_llm';

interface AskAIBoxProps {
  question: Question;
}

export default function AskAIBox({ question }: AskAIBoxProps) {
  const [input, setInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='mt-4 border-t pt-4 bg-purple-50 border border-purple-200 rounded-lg p-4'>
      <div className='flex items-center mb-3'>
        <div className='w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2'>
          <span className='text-purple-600 text-sm'>🤖</span>
        </div>
        <label
          htmlFor={`askai-${question.id}`}
          className='block text-sm font-medium text-purple-800'
        >
          Ask AI for help with this question:
        </label>
      </div>
      <textarea
        id={`askai-${question.id}`}
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='w-full px-3 py-2 border border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-black'
        placeholder='Describe what you need help with or ask a specific question...'
      />
      <div className='flex justify-between items-center mt-3'>
        <div className='text-xs text-purple-600'>
          AI will provide hints and explanations
        </div>
        <button
          className='bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={async () => {
            if (!input.trim()) return;

            setIsLoading(true);
            setAiResponse('');

            try {
              const response = await askAssignmentLLM(question, input);
              if (response && response.message) {
                setAiResponse(response.message);
              }
            } catch (error) {
              console.error('Error calling AI:', error);
              setAiResponse(
                'Sorry, there was an error getting AI assistance. Please try again.'
              );
            } finally {
              setIsLoading(false);
            }
          }}
          disabled={!input.trim() || isLoading}
        >
          {isLoading ? 'Asking AI...' : 'Send to AI'}
        </button>
      </div>

      {aiResponse && (
        <div className='mt-4 p-4 bg-white border border-purple-200 rounded-lg'>
          <div className='flex items-start'>
            <div className='w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1'>
              <span className='text-purple-600 text-sm'>🤖</span>
            </div>
            <div className='flex-1'>
              <h4 className='text-sm font-medium text-purple-800 mb-2'>
                AI Response:
              </h4>
              <p className='text-gray-700 text-sm leading-relaxed whitespace-pre-wrap'>
                {aiResponse}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
