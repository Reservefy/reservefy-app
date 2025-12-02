interface Brand {
  id: string;
  name: string;
  avatar: string;
  subtitle: string;
  rating: number;
}

export const mostBookedBrands: Brand[] = [
  {
    id: '1',
    name: 'Luxury Spa',
    avatar:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Premium Wellness',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Elite Salon',
    avatar:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Hair & Beauty',
    rating: 4.8,
  },
  {
    id: '5',
    name: 'Serenity Day Spa',
    avatar:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Luxury Experience',
    rating: 4.7,
  },
];

export const mostPopularBrands: Brand[] = [
  {
    id: '3',
    name: 'Zen Massage',
    avatar:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Therapeutic Massage',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Beauty Lab',
    avatar:
      'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Cosmetic Services',
    rating: 4.9,
  },
  {
    id: '6',
    name: 'Glow Studio',
    avatar:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Skin Care Experts',
    rating: 4.8,
  },
];

export const mostBookedWorkers: Brand[] = [
  {
    id: '7',
    name: 'Sarah Johnson',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Hair Stylist',
    rating: 4.9,
  },
  {
    id: '8',
    name: 'Mike Chen',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Massage Therapist',
    rating: 4.8,
  },
  {
    id: '9',
    name: 'Emma Davis',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Skincare Specialist',
    rating: 4.9,
  },
  {
    id: '10',
    name: 'James Wilson',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
    subtitle: 'Wellness Coach',
    rating: 4.7,
  },
];
