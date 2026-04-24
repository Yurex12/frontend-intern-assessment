'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Logo } from './Logo';
// import { Mail, Phone } from 'lucide-react';

const whatWeDoLinks = [
  { label: 'Sustainability Services', href: '#' },
  { label: 'Strategy Planning and Implementation', href: '#' },
  { label: 'Tech Talent Solutions', href: '#' },
  { label: 'Training and Development', href: '#' },
  { label: 'IT Consulting Services', href: '#' },
  { label: 'Social Impact', href: '#' },
  { label: 'Talent Recruitment', href: '#' },
];

const companyLinks = [
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

const solutionLinks = [
  { label: 'Tobams Group Academy', href: '#' },
  { label: 'Help a Tech Talent', href: '#' },
  { label: 'Campus Ambassadors Program', href: '#' },
  { label: 'Join Our Platform', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Book a Consultation', href: '#' },
  { label: 'Join Our Slack Community', href: '#' },
];

const legalLinks = [
  { label: 'Terms and Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookies Policy', href: '#' },
];

export function Footer() {
  return (
    <footer className='bg-[#11040E] text-background'>
      {/* Main Footer Content */}
      <div className='px-4 py-12 md:py-16 lg:py-20'>
        <div className='max-w-360 w-full mx-auto'>
          {/* Top Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12'>
            {/* Brand Column */}
            <div className='lg:col-span-1'>
              {/* Logo */}
              <div className='mb-6'>
                <Logo />
              </div>

              {/* Description */}
              <p className='text-sm leading-relaxed mb-6'>
                Tobams Group is an innovative consultancy firm reshaping the
                future of tech talent development in Africa, specializing in
                talent acquisition, internships, and skill development with a
                global perspective.
              </p>

              {/* Social Icons */}
              <div className='flex items-center gap-4'>
                <Link
                  href='#'
                  className='w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
                      fill='#0A0A0A'
                    />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
                  aria-label='Instagram'
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
                      fill='#0A0A0A'
                    />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors'
                  aria-label='X (Twitter)'
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
                      fill='#0A0A0A'
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* What We Do */}
            <div>
              <h3 className='text-white font-semibold text-lg mb-4'>
                What We Do
              </h3>
              <ul className='space-y-3'>
                {whatWeDoLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm hover:text-white transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className='text-white font-semibold text-lg mb-4'>Company</h3>
              <ul className='space-y-3'>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm hover:text-white transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className='text-white font-semibold text-lg mb-4'>
                Solution
              </h3>
              <ul className='space-y-3'>
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm hover:text-white transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registered Offices Section */}
          <div className='bg-[#1A1A1A] rounded-lg p-6 md:p-8 mb-8'>
            <h3 className='text-white font-semibold text-lg mb-6'>
              Registered Offices
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* United Kingdom */}
              <div>
                <h4 className='text-[#C4498D] font-semibold mb-3'>
                  United Kingdom
                </h4>
                <p className='text-sm leading-relaxed'>
                  07451196 (Registered by Company House)
                  <br />
                  Vine Cottages, 215 North Street, Romford, Essex, United
                  Kingdom, RM1 4QA
                </p>
              </div>

              {/* Nigeria */}
              <div>
                <h4 className='text-[#C4498D] font-semibold mb-3'>Nigeria</h4>
                <p className='text-sm leading-relaxed'>
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className='text-white font-semibold mb-4'>
                  Contact Information
                </h4>
                <div className='space-y-3'>
                  <Link
                    href='mailto:theteam@tobamsgroup.com'
                    className='flex items-center gap-3 text-sm hover:text-white transition-colors'
                  >
                    {/* <Mail className='w-5 h-5 text-[#C4498D]' /> */}
                    theteam@tobamsgroup.com
                  </Link>
                  <Link
                    href='tel:+447886600748'
                    className='flex items-center gap-3 text-sm hover:text-white transition-colors'
                  >
                    {/* <Phone className='w-5 h-5 text-[#C4498D]' /> */}
                    +447886600748
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-360 w-full mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm'>
              Copyright © Tobams Group, 2024. All rights reserved.
            </p>
            <div className='flex items-center gap-6'>
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='text-sm hover:text-white transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
