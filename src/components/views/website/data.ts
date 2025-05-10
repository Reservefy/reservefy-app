export const features = [
  {
    id: '1',
    title: 'Find & Book Services',
    description:
      'Easily browse categories like salons, doctors, tutors and book appointments instantly.',
    icon: 'Search',
  },
  {
    id: '2',
    title: 'Create Your Brand',
    description:
      'Set up a business page, list services, and manage your team all in one place.',
    icon: 'Briefcase',
  },
  {
    id: '3',
    title: 'Flexible Scheduling',
    description:
      'Manage your availability across multiple brands with powerful scheduling tools.',
    icon: 'Calendar',
  },
  {
    id: '4',
    title: 'Smart Management',
    description:
      'Track bookings, manage workers, and grow your customer base efficiently.',
    icon: 'Sparkles',
  },
];

export const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    features: ['Basic bookings', '1 Brand', '2 Workers', 'Basic stats'],
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '$29',
    features: [
      'Advanced bookings',
      'Multi-brand support',
      '10 Workers',
      'Priority support',
    ],
    recommended: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: '$99',
    features: [
      'Unlimited brands/workers',
      'Full analytics',
      '24/7 support',
      'Custom integrations',
    ],
  },
];

export const useCases = [
  {
    id: 'anyone',
    title: 'For Every Booking Need',
    description:
      'No matter the business — manage any service that requires appointments or schedules.',
    icon: 'Sparkles',
  },
  {
    id: 'salon',
    title: 'For Salons',
    description: 'Manage stylists, appointments and client history.',
    icon: 'Scissors',
  },
  {
    id: 'clinic',
    title: 'For Clinics',
    description: 'Schedule patients, sync calendars and track visits.',
    icon: 'Stethoscope',
  },
  {
    id: 'tutor',
    title: 'For Tutors',
    description: 'Organize lessons, track attendance and payments.',
    icon: 'BookOpen',
  },
];

export const faqs = [
  {
    id: '1',
    question: 'Can I manage multiple brands?',
    answer:
      'Yes, with the Professional and Team plans, you can create and manage multiple brand profiles.',
  },
  {
    id: '2',
    question: 'How many workers can I add?',
    answer:
      'Free plan allows up to 2 workers. Pro supports 10, and Team has no limit.',
  },
  {
    id: '3',
    question: 'Is there support for teams?',
    answer:
      'Yes, the Team plan is designed for collaborative teams with advanced access and reporting.',
  },
];
