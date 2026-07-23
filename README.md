# 🚀 Orbit — Modern B2B SaaS Growth Platform Showcase

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.5-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

Orbit is a production-grade **Portfolio Showcase & B2B SaaS Interface Concept** built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. It demonstrates modern web application design, interactive product analytics dashboards, and priority waitlist workflows.

> ℹ️ **Portfolio Note**: This project is built as an interactive frontend showcase for live portfolio reviews and GitHub presentation. Analytics dashboards and waitlist reservations operate using frontend simulation logic.

---

## ✨ Key Features & Design Highlights

- 📊 **Product Analytics Dashboard Preview**: Interactive event streaming analytics display with timeframe switching (`7D`, `30D`, `90D`), cohort retention metrics, and throughput indicators.
- 💬 **Text & Initials-Based Testimonials**: Clean review cards utilizing author initials badges (`font-bold bg-gradient-to-br`), star ratings, and non-official company titles (No image file dependencies).
- 💳 **Billing Frequency Toggle**: Interactive monthly and annual pricing switcher with automated 20% savings calculation.
- 🚀 **Priority Access Waitlist Modal**: Interactive modal dialog built with `shadcn` `Dialog`, `Input`, and `NativeSelect` primitives.
- 🎨 **Modern Dark UI Design**: Soft pill-shaped buttons (`rounded-full`), dark glassmorphism styling (`glass-panel`, `glass-card`), subtle glow gradients, and Framer Motion infinite scrolling column animations.
- 🏷️ **Non-Trademark Demo Branding**: All partner brand logos (`NOVAFLUX`, `VORTEX`, `KRYPTON`, `AETHERIA`) are fictional demo placeholders suitable for portfolio presentation.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: `shadcn` primitives (`Dialog`, `Input`, `NativeSelect`)

---

## 📂 Project Structure

```
orbit-saas-platform/
├── public/                 # Site manifest, favicons & assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx            # Sticky glassmorphism nav with mobile menu
│   │   │   ├── Hero.tsx              # Dynamic hero banner with action triggers
│   │   │   ├── LogoTicker.tsx        # Fictional demo brand carousel
│   │   │   ├── ProductShowcase.tsx   # Interactive analytics preview dashboard
│   │   │   ├── Pricing.tsx           # Monthly/Annual pricing switcher
│   │   │   ├── Testimonials.tsx      # Text & Initials-based reviews (No images)
│   │   │   ├── CallToAction.tsx      # Bottom callout section with email signup
│   │   │   ├── WaitlistModal.tsx     # Interactive modal built with shadcn primitives
│   │   │   └── Footer.tsx            # Enhanced footer & simulated portfolio badge
│   │   ├── globals.css               # Glassmorphism & dark theme variables
│   │   ├── layout.tsx                # OpenGraph & metadata setup
│   │   └── page.tsx                  # Main page composition
│   ├── components/
│   │   ├── button.tsx                # Rounded pill button primitive
│   │   └── ui/                       # shadcn primitives (Dialog, Input, NativeSelect)
│   └── lib/
│       └── utils.ts                  # Tailwind class merge helper
├── package.json
└── README.md
```

---

## 🚀 Quick Start Guide

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
