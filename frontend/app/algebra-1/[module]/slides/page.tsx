import Link from 'next/link';
import { use } from 'react';

interface SlidesPageProps {
  params: Promise<{
    module: string;
  }>;
}

export default function SlidesPage({ params }: SlidesPageProps) {
  const resolvedParams = use(params);

  const moduleTitle = resolvedParams.module
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

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
                {moduleTitle} - Slides
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <div className='bg-white rounded-lg shadow-md border border-gray-200 p-8'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
              {moduleTitle} Content
            </h2>

            <div className='space-y-6'>
              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Slide 1: Introduction
                </h3>
                <div className='bg-gray-100 rounded-lg p-4 min-h-[200px] flex items-center justify-center'>
                  <p className='text-gray-600'>
                    Slide content placeholder - Introduction to {moduleTitle}
                  </p>
                </div>
              </div>

              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Slide 2: Key Concepts
                </h3>
                <div className='bg-gray-100 rounded-lg p-4 min-h-[200px] flex items-center justify-center'>
                  <p className='text-gray-600'>
                    Slide content placeholder - Key concepts and definitions
                  </p>
                </div>
              </div>

              <div className='border border-gray-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                  Slide 3: Examples
                </h3>
                <div className='bg-gray-100 rounded-lg p-4 min-h-[200px] flex items-center justify-center'>
                  <p className='text-gray-600'>
                    Slide content placeholder - Worked examples and practice
                    problems
                  </p>
                </div>
              </div>
            </div>

            {/* AI Chat placeholder */}
            <div className='mt-8 border-t pt-6'>
              <div className='bg-blue-50 border border-blue-200 rounded-lg p-6'>
                <h3 className='text-lg font-semibold text-blue-900 mb-2'>
                  AI Chat (coming soon)
                </h3>
                <p className='text-blue-700'>
                  Interactive AI assistant will be available here to help with
                  questions and provide personalized explanations.
                </p>
                <div className='mt-4 bg-blue-100 rounded-lg p-4'>
                  <p className='text-blue-800 text-sm'>
                    🤖 AI features will include:
                  </p>
                  <ul className='text-blue-800 text-sm mt-2 ml-4 list-disc'>
                    <li>Real-time question answering</li>
                    <li>Step-by-step problem solving</li>
                    <li>Personalized learning recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
