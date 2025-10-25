'use client';
import { useState } from 'react';
import { askStudyLLM } from '../utils/AskStudyModeLlm';

export default function AIStudyBot() {
  const [input, setInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setAiResponse('');

    try {
      const response = await askStudyLLM(input);
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
  };

  return (
    <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 h-fit'>
      <div className='flex items-center mb-4'>
        <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3'>
          <span className='text-blue-600 text-lg'>🤖</span>
        </div>
        <h3 className='text-lg font-semibold text-blue-900'>
          AI Study Assistant
        </h3>
      </div>

      <form onSubmit={handleSubmit} className='mb-4'>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Ask me anything about the material...'
          className='w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black text-sm resize-none'
          rows={3}
        />
        <button
          type='submit'
          disabled={!input.trim() || isLoading}
          className='w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isLoading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>

      {aiResponse && (
        <div className='bg-white border border-blue-200 rounded-lg p-4'>
          <div className='flex items-start'>
            <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1'>
              <span className='text-blue-600 text-sm'>🤖</span>
            </div>
            <div className='flex-1'>
              <h4 className='text-sm font-medium text-blue-800 mb-2'>
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
