'use client';

import Link from 'next/link';
import { Logo } from './Logo';

import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { XIcon } from '@/components/icons/XIcon';
import { MailIcon } from '@/components/icons/MailIcon';
import { PhoneIcon } from '@/components/icons/PhoneIcon';

import {
  companyLinks,
  legalLinks,
  solutionLinks,
  whatWeDoLinks,
} from '@/constants';

export function Footer() {
  return (
    <footer className='bg-[#11040E] text-background px-4 md:px-8 lg:px-12 py-6 lg:py-12'>
      <div className='max-w-8xl w-full mx-auto'>
        <div>
          {/* Top Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12'>
            <div className='lg:col-span-1 space-y-6'>
              <Logo />

              <p className='text-sm leading-relaxed'>
                Tobams Group is an innovative consultancy firm reshaping the
                future of tech talent development in Africa, specializing in
                talent acquisition, internships, and skill development with a
                global perspective.
              </p>

              <div className='flex items-center gap-4'>
                <Link
                  href='#'
                  className='w-10 h-10 rounded-full bg-background flex items-center justify-center'
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href='#'
                  className='w-10 h-10 rounded-full bg-background flex items-center justify-center'
                >
                  <InstagramIcon />
                </Link>
                <Link
                  href='#'
                  className='w-10 h-10 rounded-full bg-background flex items-center justify-center'
                >
                  <XIcon />
                </Link>
              </div>
            </div>

            {/* What We Do */}
            <div>
              <h3 className='text-background font-semibold text-lg mb-4'>
                What We Do
              </h3>
              <ul className='space-y-3'>
                {whatWeDoLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm hover:text-secondary'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className='text-background font-semibold text-lg mb-4'>
                Company
              </h3>
              <ul className='space-y-3'>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm hover:text-secondary'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className='text-background font-semibold text-lg mb-4'>
                Solution
              </h3>
              <ul className='space-y-3'>
                {solutionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm hover:text-secondary'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registered Offices Section */}
          <div className='bg-[#FFFFFF0F] rounded-lg p-6 md:p-8 mb-8'>
            <h3 className='text-background font-semibold text-lg mb-6'>
              Registered Offices
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:divide-x lg:divide-[#DDD0DA]'>
              {/* United Kingdom */}
              <div>
                <h4 className='text-secondary font-semibold mb-3'>
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
                <h4 className='text-secondary font-semibold mb-3'>Nigeria</h4>
                <p className='text-sm leading-relaxed'>
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className='text-background font-semibold mb-4'>
                  Contact Information
                </h4>
                <div className='space-y-3'>
                  <Link
                    href='mailto:theteam@tobamsgroup.com'
                    className='flex items-center gap-3 text-sm hover:text-background transition-colors'
                  >
                    <MailIcon className='w-5 h-5 text-secondary' />
                    theteam@tobamsgroup.com
                  </Link>
                  <Link
                    href='tel:+447886600748'
                    className='flex items-center gap-3 text-sm hover:text-background transition-colors'
                  >
                    <PhoneIcon className='w-5 h-5 text-secondary' />
                    +447886600748
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-[#DDD0DA]'>
          <div className='px-4 pt-6'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-4'>
              <p className='text-sm text-center'>
                Copyright © Tobams Group, 2024. All rights reserved.
              </p>
              <div className='flex items-center flex-row-reverse md:flex-row flex-wrap justify-center gap-6'>
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='text-sm hover:text-background transition-colors underline lg:no-underline'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
