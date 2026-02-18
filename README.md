# Joseph Bassey Portfolio

A futuristic, premium, high-performance personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Features

- **Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4.
- **Styling**: Black & Gold premium theme, responsive design, glassmorphism effects.
- **Content**:
  - **Projects**: Manage via `src/data/projects.ts`
  - **Training**: Manage via `src/data/training.ts`
  - **Experience**: Manage via `src/components/sections/timeline.tsx`
  - **Blog**: MDX files in `src/content/blog/`
- **Modules**:
  - **Home**: Hero, Skills, Projects Preview, Contact CTA.
  - **About**: Profile, "What I Do", Timeline.
  - **Projects**: Filterable grid, Homework section.
  - **Training**: Pricing cards, FAQ, Testimonials.
  - **Blog**: Searchable list, MDX rendering.
  - **Contact**: Functional form wrapper, contact info.

## 📝 How to Update Content

### 1. General Info & Socials
Edit `src/config/site.ts` to update the name, description, and social links.

### 2. Projects
Edit `src/data/projects.ts`. Add your projects following the `Project` type structure.

### 3. Blog Posts
Add new `.mdx` files to `src/content/blog/`. Ensure you include the required frontmatter:

```yaml
---
title: "Your Post Title"
description: "Brief description"
date: "YYYY-MM-DD"
category: "Category Name"
author: "Your Name"
image: "/optional/image.jpg"
---
```

### 4. Training Programs
Edit `src/data/training.ts`.

## 🌍 Deployment

The easiest way to deploy is to use [Vercel](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project on Vercel.
3. Vercel will automatically detect Next.js and build settings.

### Environment Variables

Add these to your `.env.local` or Vercel Project Settings for analytics:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🎨 Theme Customization

Colors are defined in `src/app/globals.css` using Tailwind v4 theme variables.

- Primary (Gold): `#D4AF37`
- Background (Black): `#000000`

## 📄 License

This project is for personal use.
