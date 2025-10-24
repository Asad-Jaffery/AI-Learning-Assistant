'use client';
import Link from 'next/link';
import { use } from 'react';
import QuestionBox from '../../../components/QuestionBox';
import { Question } from '../../../types/question';

interface AssignmentPageProps {
  params: Promise<{
    module: string;
  }>;
}

export default function AssignmentPage({ params }: AssignmentPageProps) {
  const resolvedParams = use(params);

  const moduleTitle = resolvedParams.module
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const questions: Question[] = [
    {
      id: 1,
      question: 'Solve for x: 2x + 5 = 13',
      points: 5,
      solution: '4',
    },
    {
      id: 2,
      question:
        'Find the slope of the line passing through points (2, 3) and (4, 7)',
      points: 8,
      solution: '2',
    },
    {
      id: 3,
      question: 'What is the slop in the equation: y = 2x - 1',
      points: 10,
      solution: '2',
    },
    {
      id: 4,
      question: 'Solve for y: 7 - y = 1',
      points: 12,
      solution: '6',
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
                <QuestionBox key={question.id} question={question} />
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
