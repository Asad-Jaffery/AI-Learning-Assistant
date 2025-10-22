import Link from 'next/link';

export default function CoursePage() {
  const modules = [
    {
      id: 'linear-equations',
      title: 'Linear Equations',
      description: 'Understanding and solving linear equations',
    },
    {
      id: 'quadratic-functions',
      title: 'Quadratic Functions',
      description: 'Working with quadratic equations and graphs',
    },
    {
      id: 'systems-of-equations',
      title: 'Systems of Equations',
      description: 'Solving systems of linear equations',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <nav className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <Link href='/' className='text-blue-600 hover:text-blue-800 mr-4'>
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
              <h1 className='text-xl font-semibold text-gray-900'>Algebra 1</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='px-4 py-6 sm:px-0'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Course Modules
          </h2>

          <div className='space-y-4'>
            {modules.map((module) => (
              <div
                key={module.id}
                className='bg-white rounded-lg shadow-md border border-gray-200 p-6'
              >
                <div className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      {module.title}
                    </h3>
                    <p className='text-sm text-gray-600 mt-1'>
                      {module.description}
                    </p>
                  </div>
                  <div className='flex space-x-3 ml-4'>
                    <Link
                      href={`/algebra-1/${module.id}/slides`}
                      className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200'
                    >
                      View Slides
                    </Link>
                    <Link
                      href={`/algebra-1/${module.id}/assignment`}
                      className='bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200'
                    >
                      View Assignment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
