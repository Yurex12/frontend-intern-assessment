import { NavLink, Testimonial } from '@/types';

import aishaImg from '@/images/aisha.png';
import johnImg from '@/images/john.png';
import chinonsoImg from '@/images/chinonso.png';

export const navLinks: NavLink[] = [
  { label: 'About', href: '#', hasChevron: true },
  { label: 'What We Do', href: '#', hasChevron: true },
  { label: 'Jobs', href: '#', hasChevron: true },
  { label: 'Project', href: '#', hasChevron: false },
  { label: 'TG Academy', href: '#', hasChevron: false },
  { label: 'Strategic Partnership', href: '#', hasChevron: false },
  { label: 'Pricing', href: '#', hasChevron: false },
  { label: 'Book a Consultant', href: '#', hasChevron: false },
];

export const courses = [
  'Business Analysis',
  'Design Thinking',
  'Effective Communication',
  'Entrepreneurship',
  'Career Development',
  'Business Model',
];

export const corporateTrainings = [
  'Leadership Training',
  'Strategic Planning and Implementation',
  'Project Management',
  'Sustainability Training',
  'Customised Training',
];

export const managementDevelopmentsPrograms = [
  'Enhanced Leadership Skills',
  'Improved Employee Engagement',
  'Stronger Organisational Culture',
  'Sustainable Growth',
];

export const capacityDevelopments = [
  'Tailored Training Programs',
  'Expert-Led Workshops',
  'Personalized Mentorship',
  'Technical Skills Enhancement',
  'Collaborative Learning Environment',
  'Ongoing Support and Resources',
];

export const topicsTabs = [
  'Strategic Career Guidance',
  'Leadership Development',
  'CV Development',
  'Sustainability Leadership',
  'Communication Skills',
  'Business Model',
];

export const personalIndividualTrainings = [
  'Leadership Development',
  'Soft Skill Development',
  'Industry Specific Knowledge',
  'Technical Skills Enhancement',
  'Time Management and Productivity',
  'Career Development',
];

export const trainingSections = [
  {
    title: 'Expert-Led Learning',
    description:
      'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.',
  },
  {
    title: 'Interactive Workshops',
    description:
      'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.',
  },
  {
    title: 'Comprehensive Curriculum',
    description:
      'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.',
  },
  {
    title: 'Global Recognition',
    description:
      'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Aisha Yusuf',
    role: 'Founder, CraftHub NG',
    image: aishaImg,
    testimonial:
      'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
  },
  {
    name: 'John Davies',
    role: 'Marketing Manager, E-Commerce Emporium',
    image: johnImg,
    testimonial: `Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!`,
  },
  {
    name: 'Chinonso Nwankwo',
    role: 'HR Director, FutureTech Solutions',
    image: chinonsoImg,
    testimonial: `Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.`,
  },
  {
    name: 'Ekungomi Yusuf',
    role: 'IT Director, FutureTech Solutions',
    image: johnImg,
    testimonial: `Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.`,
  },
];

export const whatWeDoLinks = [
  { label: 'Sustainability Services', href: '#' },
  { label: 'Strategy Planning and Implementation', href: '#' },
  { label: 'Tech Talent Solutions', href: '#' },
  { label: 'Training and Development', href: '#' },
  { label: 'IT Consulting Services', href: '#' },
  { label: 'Social Impact', href: '#' },
  { label: 'Talent Recruitment', href: '#' },
];

export const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Jobs', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Our Founder', href: '#' },
  { label: 'Business Model', href: '#' },
  { label: 'The Team', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Testimonials', href: '#' },
];

export const solutionLinks = [
  { label: 'Tobams Group Academy', href: '#' },
  { label: 'Help a Tech Talent', href: '#' },
  { label: 'Campus Ambassadors Program', href: '#' },
  { label: 'Join Our Platform', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Book a Consultation', href: '#' },
  { label: 'Join Our Slack Community', href: '#' },
];

export const legalLinks = [
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookies Policy', href: '#' },
];
