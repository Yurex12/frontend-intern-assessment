# TOBAMS GROUP - Assessment Submission

## Project Overview

A replica of the Tobams Group Figma design. This project focuses on turning a professional design into a fast, responsive, and clean Next.js application.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Custom SVG components (React-based)
- **Interactivity:** Swiper.js for responsive carousels
- **Utilities:** `clsx` & `tailwind-merge` (The `cn` utility pattern)

## Technical Decisions & Architecture

### 1. The `cn` Utility Pattern

Implemented a custom `cn` utility using **`clsx`** and **`tailwind-merge`**.

- **Why:** This avoids class conflicts and allows for clean, conditional class logic without the mess of standard template literals.
- **Location:** `src/lib/utils.ts`

### 2. Scalable Design System (Tailwind v4)

Leveraging the new `@theme` block in Tailwind v4:

- **Variables:** Brand colors (`primary`, `secondary`, `primary-muted`) are defined as CSS variables.
- **Custom Constraints:** Added a custom `8xl` (1440px) width constraint to match the desktop artboard.
- **Base Layer:** Applied global resets using `@layer base` to ensure body styles and cursor pointers are consistent.

### 3. Performance & Optimization

- **Next.js Image Component:** Utilized for all key assets (Logo, Hero Background) to optimize **Largest Contentful Paint (LCP)** and prevent **Cumulative Layout Shift (CLS)**.

### 4. Interactive Elements

- **Swiper.js:** Chosen for the testimonial sliders to provide a smooth, touch-friendly experience on mobile devices.

## Project Structure

- `/src/components`: UI components (Header, Hero, Icons).
- `/src/lib`: Core utility functions.
- `globals.css`: Theme configuration.

## Getting Started

1. **Clone the repo:** `git clone <repo-url>`
2. **Install dependencies:** `npm install`
3. **Run development server:** `npm run dev`
