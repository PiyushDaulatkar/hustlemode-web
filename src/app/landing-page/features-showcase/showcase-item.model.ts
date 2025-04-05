export interface ShowcaseItem {
  label: string;
  title: string;
  description: string;
  image: string;
  link: boolean;
  linkText?: string;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    label: 'Clear your mind',
    title: 'Capture tasks at the speed of thought',
    description:
      'We’ve spent over a decade refining Todoist to be an extension of your mind...',
    image: '1.jpg',
    link: false,
  },
  {
    label: 'Focus on what’s important',
    title: 'Stay organized and focused',
    description:
      'Achieve mental clarity by sorting tasks into Today, Upcoming...',
    image: '2.jpg',
    link: false,
  },
  {
    label: 'Plan with confidence',
    title: 'Simplify your planning',
    description:
      'Make the most of your time. Schedule due dates, visualize your week...',
    image: '3.jpg',
    link: false,
  },
  {
    label: 'Organize your teamwork, too',
    title: 'A home for your team’s tasks',
    description:
      'Give your team a shared space to collaborate and stay on top...',
    link: true,
    image: '4.jpg',
    linkText: 'Learn more about teams',
  },
];
