import Link from 'next/link';
import { use } from 'react';
import AIStudyBot from '../../../components/AIStudyBot';

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
          <div className='flex gap-6'>
            {/* Main content area */}
            <div className='flex-1 bg-white rounded-lg shadow-md border border-gray-200 p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                {moduleTitle} Content
              </h2>

              <div className='space-y-6'>
                <div className='border border-gray-200 rounded-lg p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Slide 1: Introduction to Linear Equations
                  </h3>
                  <div className='bg-gray-50 rounded-lg p-6'>
                    <div className='space-y-4'>
                      <p className='text-gray-800'>
                        <strong>What is a Linear Equation?</strong>
                      </p>
                      <p className='text-gray-700'>
                        A linear equation is an equation where the highest power
                        of the variable is 1.
                      </p>
                      <div className='bg-white border border-gray-200 rounded p-4'>
                        <p className='text-gray-800 font-mono text-lg'>
                          2x + 5 = 13
                        </p>
                        <p className='text-sm text-gray-600 mt-2'>
                          This is a linear equation in one variable (x)
                        </p>
                      </div>
                      <p className='text-gray-700'>
                        <strong>Goal:</strong> Find the value of x that makes
                        the equation true.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-lg p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Slide 2: Solving Linear Equations
                  </h3>
                  <div className='bg-gray-50 rounded-lg p-6'>
                    <div className='space-y-4'>
                      <p className='text-gray-800'>
                        <strong>Steps to Solve:</strong>
                      </p>
                      <ol className='list-decimal list-inside space-y-2 text-gray-700'>
                        <li>Isolate the variable term</li>
                        <li>Use inverse operations</li>
                        <li>Check your answer</li>
                      </ol>
                      <div className='bg-white border border-gray-200 rounded p-4'>
                        <p className='text-gray-800 font-mono text-sm'>
                          2x + 5 = 13
                          <br />
                          2x + 5 - 5 = 13 - 5<br />
                          2x = 8<br />x = 4
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='border border-gray-200 rounded-lg p-6'>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                    Slide 3: Practice Problems
                  </h3>
                  <div className='bg-gray-50 rounded-lg p-6'>
                    <div className='space-y-4'>
                      <p className='text-gray-800'>
                        <strong>Try these problems:</strong>
                      </p>
                      <div className='space-y-3'>
                        <div className='bg-white border border-gray-200 rounded p-3'>
                          <p className='text-gray-800 font-mono'>3x - 7 = 14</p>
                        </div>
                        <div className='bg-white border border-gray-200 rounded p-3'>
                          <p className='text-gray-800 font-mono'>2x + 1 = 9</p>
                        </div>
                        <div className='bg-white border border-gray-200 rounded p-3'>
                          <p className='text-gray-800 font-mono'>
                            5x - 3 = 2x + 6
                          </p>
                        </div>
                      </div>
                      <p className='text-sm text-gray-600'>
                        <strong>Hint:</strong> Use the same steps we learned!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-80 flex-shrink-0'>
              <AIStudyBot />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
