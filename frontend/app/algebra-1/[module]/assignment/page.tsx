import Link from 'next/link';
import { use } from 'react';

interface AssignmentPageProps {
  params: Promise<{
    module: string;
  }>;
}

export default function AssignmentPage({ params }: AssignmentPageProps) {
  const resolvedParams = use(params);

  console.log('HERE ARE THE PARAMS', resolvedParams);
  const moduleTitle = resolvedParams.module
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const questions = [
    {
      id: 1,
      question: 'Solve for x: 2x + 5 = 13',
      points: 5,
    },
    {
      id: 2,
      question:
        'Find the slope of the line passing through points (2, 3) and (4, 7)',
      points: 8,
    },
    {
      id: 3,
      question: 'Graph the equation y = 2x - 1',
      points: 10,
    },
    {
      id: 4,
      question: 'Solve the system of equations: x + y = 5, 2x - y = 1',
      points: 12,
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <Link
                href='/algebra-1'
                className='text-blue-600 hover:text-blue-800 mr-4'
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </Link>
              <h1 className='text-xl font-semibold text-gray-900'>
                {moduleTitle} - Assignment
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <div className='bg-white rounded-lg shadow-md border border-gray-200 p-8'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-gray-900'>
                {moduleTitle} Assignment
              </h2>
              <div className='text-sm text-gray-600'>
                Total Points: {questions.reduce((sum, q) => sum + q.points, 0)}
              </div>
            </div>

            <div className='space-y-6'>
              {questions.map((question) => (
                <div
                  key={question.id}
                  className='border border-gray-200 rounded-lg p-6'
                >
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
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                        placeholder='Enter your answer here...'
                      />
                    </div>

                    <div className='flex justify-between items-center'>
                      <button className='bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-600 transition-colors duration-200'>
                        Get Hint
                      </button>
                      <div className='text-sm text-gray-500'>
                        Hint: Click "Get Hint" for AI-powered assistance
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-8 pt-6 border-t'>
              <div className='flex justify-between items-center'>
                <div className='text-sm text-gray-600'>
                  Complete all questions and submit when ready
                </div>
                <button className='bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors duration-200'>
                  Submit Assignment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
