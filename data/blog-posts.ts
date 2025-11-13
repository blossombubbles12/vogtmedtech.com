// Static blog posts data
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  tags: string[]
  content?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-transforming-medical-diagnostics',
    title: 'How AI is Transforming Medical Diagnostics in 2025',
    description: 'Explore the revolutionary impact of artificial intelligence on medical diagnostics, from radiology to pathology, and how it\'s improving patient outcomes.',
    date: '2025-11-10',
    author: 'Dr. Sarah Chen',
    category: 'Artificial Intelligence',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&q=90',
    tags: ['AI', 'Diagnostics', 'Healthcare Innovation', 'Machine Learning'],
  },
  {
    slug: 'future-of-robotic-surgery',
    title: 'The Future of Robotic Surgery: Beyond the Operating Room',
    description: 'Discover how next-generation surgical robots are expanding possibilities in minimally invasive procedures and changing the landscape of modern surgery.',
    date: '2025-11-05',
    author: 'Dr. Michael Rodriguez',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop&q=90',
    tags: ['Robotic Surgery', 'Medical Devices', 'Innovation', 'Minimally Invasive'],
  },
  {
    slug: 'remote-patient-monitoring-revolution',
    title: 'The Remote Patient Monitoring Revolution: Healthcare Beyond Hospital Walls',
    description: 'How remote patient monitoring technology is transforming chronic disease management and reducing hospital readmissions while improving quality of life.',
    date: '2025-10-28',
    author: 'Emily Thompson, RN',
    category: 'Digital Health',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=630&fit=crop&q=90',
    tags: ['Remote Monitoring', 'Telehealth', 'Chronic Disease', 'Patient Care'],
  },
  {
    slug: 'precision-medicine-genomics',
    title: 'Precision Medicine and Genomics: Tailoring Healthcare to Your DNA',
    description: 'Explore how genomic sequencing and precision medicine are enabling personalized treatments based on individual genetic profiles, revolutionizing oncology and beyond.',
    date: '2025-10-20',
    author: 'Dr. Jennifer Liu',
    category: 'Precision Medicine',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=630&fit=crop&q=90',
    tags: ['Genomics', 'Precision Medicine', 'Personalized Healthcare', 'Oncology'],
  },
  {
    slug: 'cybersecurity-medical-devices',
    title: 'Cybersecurity in Medical Devices: Protecting Patient Safety in a Connected World',
    description: 'As medical devices become increasingly connected, cybersecurity is critical for patient safety. Learn about emerging threats and how the industry is responding.',
    date: '2025-10-15',
    author: 'David Kim',
    category: 'Healthcare IT',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=630&fit=crop&q=90',
    tags: ['Cybersecurity', 'Medical Devices', 'Healthcare IT', 'Patient Safety'],
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    if (a.date < b.date) return 1
    return -1
  })
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}
