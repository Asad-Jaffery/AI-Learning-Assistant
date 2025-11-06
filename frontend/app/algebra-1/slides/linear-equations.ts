interface SlidesContent {
  title: string;
  content: (string | { code?: string })[];
}

const slides: SlidesContent[] = [
  {
    title: 'Introduction to Linear Equations',
    content: [
      '**What is a Linear Equation?**',
      'A linear equation is an equation where the highest power of the variable is 1.',
      { code: '2x + 5 = 13' },
      'Goal: Find the value of x that makes the equation true.',
    ],
  },
  {
    title: 'Solving Linear Equations',
    content: [
      '**Steps to Solve:**',
      '1. Isolate the variable term',
      '2. Use inverse operations',
      '3. Check your answer',
      { code: '2x + 5 = 13\n2x + 5 - 5 = 13 - 5\n2x = 8\nx = 4' },
    ],
  },
  {
    title: 'Practice Problems',
    content: [
      '**Try these problems:**',
      { code: '3x - 7 = 14' },
      { code: '2x + 1 = 9' },
      { code: '5x - 3 = 2x + 6' },
      'Hint: Use the same steps we learned!',
    ],
  },
];

export default slides;
