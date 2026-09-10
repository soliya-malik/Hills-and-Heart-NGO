# Hills & Hearts Foundation 🏔️❤️

Official web application for **Hills & Hearts Foundation**, a grassroots non-profit organization dedicated to empowering communities, advancing children's education, preserving natural ecosystems, promoting youth sports, and supporting women's self-reliance across Jammu & Kashmir.

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Ready-black?style=flat&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-orange?style=flat)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## 🌟 Core Pillars & Initiatives

- **📚 Education**: Mountain reading circles, after-school tuition, learning supplies, and scholarships for rural students.
- **🌲 Environment**: Community tree plantation drives, Clean Wular initiatives, and youth-led eco-clubs.
- **💼 Employability**: Practical vocational training, digital literacy, and women's tailoring cohorts.
- **🤝 Empowerment**: Women-led village self-help collectives, health awareness workshops, and civic support.
- **⚽ Sports**: Grassroots football, cricket leagues, and mountain athletics to foster youth health and community unity.

---

## 🚀 Key Website Features

- **Full Page Navigation**: Interactive pages for Home, About, Programs, Impact Stats, Community Stories, Visual Gallery, Events, Volunteer Onboarding, and Contact.
- **Interactive Programs**: Dedicated dynamic pillar pages (`/programs/$pillar`) highlighting specific goals and case studies.
- **Impact Showcase**: Live interactive statistics illustrating verified impact across 42+ villages and 6,800+ students.
- **Volunteer & Partnership Forms**: Intuitive, validated forms for welcoming community members and organizational partners.
- **Accessible & Responsive**: Fully responsive layout optimized for mobile, tablet, and desktop screens with accessible contrast and micro-interactions.

---

## 🛠️ Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React framework with SSR and file-based routing)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom brand palettes (Forest Green, Sunrise Orange, Mountain Blue)
- **Components**: [Radix UI](https://www.radix-ui.com/) accessible primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Type Checking**: [TypeScript 5](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```text
├── public/                # Static public assets (logos, favicon, robots.txt)
├── src/
│   ├── assets/            # Photography and visual assets
│   ├── components/
│   │   ├── site/          # Reusable site components (SiteNav, SiteFooter, PageHero, Layout)
│   │   └── ui/            # Radix UI primitive wrappers and design tokens
│   ├── lib/
│   │   ├── site-data.ts   # Centralized data model for programs, stories, stats & events
│   │   └── utils.ts       # Utility helper functions
│   ├── routes/            # File-based routes for TanStack Start
│   │   ├── __root.tsx     # Application shell and HTML root layout
│   │   ├── index.tsx      # Landing page
│   │   ├── about.tsx      # About the foundation and leadership
│   │   ├── programs/      # Pillar listings and dynamic pillar pages
│   │   ├── impact.tsx     # Verified community impact metrics
│   │   ├── stories/       # Community grassroots stories
│   │   ├── gallery.tsx    # High-resolution photo gallery
│   │   ├── events/        # Upcoming drives and past events
│   │   ├── volunteer.tsx  # Volunteer sign-up form
│   │   └── contact.tsx    # Contact information and inquiry form
│   ├── styles.css         # Design system tokens and custom utilities
│   ├── router.tsx         # Router configuration
│   └── server.ts          # Server entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration with plugins
```

---

## 💻 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or 22.x recommended)
- `npm` or `bun`

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/soliya-malik/Hills-and-Heart-NGO.git
   cd Hills-and-Heart-NGO
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Building for Production

To create an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

This project is configured and tested for deployment on [Vercel](https://vercel.com/):

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** > **"Project"**.
2. Select your GitHub repository: `soliya-malik/Hills-and-Heart-NGO`.
3. Vercel will detect the Vite / TanStack Start configuration:
   - **Framework Preset**: TanStack Start / Vite / Other
   - **Build Command**: `npm run build`
   - **Output Directory**: Auto-managed by TanStack Start / Nitro
   - **Install Command**: `npm install`
4. Click **Deploy**.

---

## 📄 License

This project is open-source and created for the community welfare initiatives of Hills & Hearts Foundation.
