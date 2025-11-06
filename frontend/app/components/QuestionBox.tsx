'use client';
import { useState } from 'react';
import AskAIBox from './AIAssignmentBot';
import { Question } from '../types/question';

interface QuestionBoxProps {
  question: Question;
}

export default function QuestionBox({ question }: QuestionBoxProps) {
  const [showAIBox, setShowAIBox] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  return (
    <div className='border border-gray-200 rounded-lg p-6'>
      <div className='flex justify-between items-start mb-4'>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>
            Question {question.id}
          </h3>
          <p className='text-gray-700 mb-4'>{question.question}</p>
        </div>
        <div className='text-sm text-gray-500 ml-4'>
          {question.points} points
        </div>
      </div>

      <div className='space-y-4'>
        <div>
          <label
            htmlFor={`answer-${question.id}`}
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            Your Answer:
          </label>
          <textarea
            id={`answer-${question.id}`}
            rows={3}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black'
            placeholder='Enter your answer here...'
          />
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex space-x-3'>
            <button
              className='bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors duration-200'
              onClick={() => setShowAIBox(!showAIBox)}
            >
              {showAIBox ? 'Hide AI' : 'Ask AI?'}
            </button>

            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-red-500 text-white hover:bg-red-600'
                  : userAnswer.trim()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              onClick={() => {
                if (!isSubmitted && userAnswer.trim()) {
                  const correct =
                    userAnswer.trim().toLowerCase() ===
                    question.solution.toLowerCase();
                  setIsCorrect(correct);
                  setIsSubmitted(true);
                } else if (isSubmitted) {
                  const correct =
                    userAnswer.trim().toLowerCase() ===
                    question.solution.toLowerCase();
                  setIsCorrect(correct);
                }
              }}
              disabled={!userAnswer.trim()}
            >
              {isSubmitted
                ? isCorrect
                  ? '✓ Correct!'
                  : '✗ Incorrect'
                : 'Submit Answer'}
            </button>

            {isSubmitted && (
              <button
                className='px-4 py-2 rounded-md text-sm font-medium bg-gray-500 text-white hover:bg-gray-600 transition-colors duration-200'
                onClick={() => {
                  setIsSubmitted(false);
                  setIsCorrect(null);
                }}
              >
                Edit Answer
              </button>
            )}
          </div>
        </div>

        {showAIBox && <AskAIBox question={question} />}

        {isSubmitted && (
          <div
            className={`mt-4 p-4 rounded-lg border ${
              isCorrect
                ? 'bg-green-50 border-green-200'
                : 'bg-red-50 border-red-200'
            }`}
          >
            <div className='flex items-center'>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                  isCorrect ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                <span
                  className={`text-sm ${
                    isCorrect ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {isCorrect ? '✓' : '✗'}
                </span>
              </div>
              <div>
                <p
                  className={`font-medium ${
                    isCorrect ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    isCorrect ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {isCorrect
                    ? 'Great job! Your answer is correct.'
                    : 'Try again! If you get stuck, AI is here to help'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
